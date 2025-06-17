import { createStore, useStore as baseUseStore, Store } from 'vuex';
import locations, { LocationState } from './modules/locations';
import sessions, { SessionState } from './modules/sessions';
import speakers, { SpeakerState } from './modules/speakers';
import user, { User } from './modules/user';
import darkMode, { DarkModeState } from './modules/darkMode';
import nominees, { NomineeState } from './modules/nominees';


export interface StoreState {
  locations: LocationState,
  sessions: SessionState,
  speakers: SpeakerState,
  user: User,
  darkMode: DarkModeState,
  nominees: NomineeState // Created New Nominee page inside Business page

}

const store = createStore<StoreState>({
  modules: {
    locations,
    sessions,
    speakers,
    user,
    darkMode,
    nominees
  },
  strict: process.env.NODE_ENV !== 'production'
});

export function useStore(): Store<StoreState> {
  return baseUseStore();
}

export default store;
