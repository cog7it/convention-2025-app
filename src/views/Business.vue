<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <!-- Replace back button with menu button (hamburger icon) -->
          <ion-menu-button class="menu-button"></ion-menu-button>
        </ion-buttons>
        <ion-title>Business</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding business-page">
      <!-- Main Content -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>General Conference Business</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>
            General Conference Convention is where we conduct the business of the Church of God (Seventh Day).
            All members present at convention have a vote in the proceedings and decisions, including electing
            the board of directors. Help fulfill this responsibility.
          </p>
        </ion-card-content>
      </ion-card>

      <!-- Helpful Resources Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Helpful Resources</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list class="pdf-list">
            <ion-item button lines="inset" @click="openPdf('assets/pdf/Church_Manual-Eng-R2023.pdf')">
              <ion-label>Church Manual (English)</ion-label>
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('assets/pdf/Church_Manual-Sp-R2023.pdf')">
              <ion-label>Church Manual (Spanish)</ion-label>
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('assets/pdf/Membership Application-Eng 2021.pdf')">
              <ion-label>Membership Application (English)</ion-label>
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('assets/pdf/Membership Application-Sp 2021.pdf')">
              <ion-label>Membership Application (Spanish)</ion-label>
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('assets/pdf/Amendments-2025.pdf')">
              <ion-label>Proposed Amendments</ion-label>
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('assets/pdf/2025-Nominees.pdf')">
              <ion-label>Board Nominees (More Info)</ion-label>
              <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>


      <!-- Board Nominees Card (Dynamic) -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Board Nominees</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid fixed>
            <ion-row>
              <ion-col
                v-for="nominee in nominees"
                :key="nominee.id"
                size="12"
                size-md="6"
              >
                <ion-card class="nominee-card" button @click="goToNomineeDetail(nominee.id)">
                  <ion-card-header>
                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <img :src="nominee.profilePic || '/assets/img/placeholder.png'" :alt="nominee.name + ' photo'" />
                      </ion-avatar>
                      <ion-label>
                        <h2>{{ nominee.name }}</h2>
                        <p><strong>Resides:</strong> {{ nominee.reside }}</p>
                      </ion-label>
                      <ion-icon :icon="chevronForwardOutline" slot="end" />
                    </ion-item>
                  </ion-card-header>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar
} from '@ionic/vue';
import { chevronForwardOutline } from 'ionicons/icons';
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';

const store = useStore();
const router = useRouter();

const nominees = computed(() => store.getters['allNominees']);

onMounted(() => {
  if (!store.state.nominees.nominees.length) {
    store.dispatch('loadNomineeData');
  }
});

const goToNomineeDetail = (id: number) => {
  router.push({ name: 'nominee-detail', params: { nomineeId: id } });
};

const openPdf = (filename: string) => {
  window.open(`/assets/pdf/${filename}`, '_blank');
};
</script>

<style scoped>
.section-intro {
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.nominee-card {
  margin-bottom: 16px;
  border-radius: 10px;
  transition: box-shadow 0.2s ease;
  cursor: pointer;
}

.nominee-card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.pdf-list ion-item {
  --background: #f4f4f4;
  --color: #000;
  border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

.pdf-list ion-icon {
  color: var(--ion-color-primary);
}
</style>
