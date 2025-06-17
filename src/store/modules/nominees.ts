import { Module } from 'vuex';

export interface Nominee {
  id: number;
  name: string;
  reside: string;
  wife: string;
  children: string;
  profilePic: string;
  churchActivities: string;
  education: string;
  workLeadership: string;
  ministryHighlights: string;
}

export interface NomineeState {
  nominees: Nominee[];
}

const nomineeStore: Module<NomineeState, {}> = {
  state: {
    nominees: []
  },
  mutations: {
    updateNominees(state, nominees: Nominee[]) {
      state.nominees = nominees;
    }
  },
  getters: {
    allNominees: (state): Nominee[] => state.nominees,

    getNomineeById: (state) => (id: number): Nominee | undefined => {
      return state.nominees.find(nominee => nominee.id === id);
    },

    getNomineesSortedByName: (state): Nominee[] => {
      return [...state.nominees].sort((a, b) => a.name.localeCompare(b.name));
    }
  },
  actions: {
    loadNomineeData({ commit }) {
      return fetch('/data/data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const nominees = data.nominees.map((n: any): Nominee => ({
            id: parseInt(n.id),
            name: n.name || '',
            reside: n.reside || '',
            wife: n.wife || '',
            children: n.children || '',
            profilePic: n.profilePic || '', 
            churchActivities: n.churchActivities || '',
            education: n.education || '',
            workLeadership: n.workLeadership || '',
            ministryHighlights: n.ministryHighlights || ''
          }));
          commit('updateNominees', nominees);
          return nominees;
        })
        .catch(error => {
          console.error('Error loading nominee data:', error);
          throw error;
        });
    }
  }
};

export default nomineeStore;
