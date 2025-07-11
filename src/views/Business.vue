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
            <ion-item button lines="inset" @click="openPdf('Church_Manual-Eng-R2023.pdf')">
              <ion-label>Church Manual (English)</ion-label>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('Church_Manual-Sp-R2023.pdf')">
              <ion-label>Church Manual (Spanish)</ion-label>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('Membership Application-Eng 2021.pdf')">
              <ion-label>Membership Application (English)</ion-label>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('Membership Application-Sp 2021.pdf')">
              <ion-label>Membership Application (Spanish)</ion-label>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('Amendments-2025.pdf')">
              <ion-label>Proposed Amendments</ion-label>
            </ion-item>
            <ion-item button lines="inset" @click="openPdf('2025-Nominees.pdf')">
              <ion-label>Board Nominees (More Info)</ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>


      <!-- Board Nominees Card -->
      <ion-card class="board-nominees-card">
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
              >
                <ion-card class="speaker-card">
                  <ion-card-header>
                    <ion-item lines="none" button @click="goToNomineeDetail(nominee.id)">
                      <ion-avatar slot="start">
                        <img
                          :src="nominee.profilePic || '/assets/img/placeholder.png'"
                          :alt="nominee.name + ' photo'"
                        />
                      </ion-avatar>
                      <ion-label>
                        <h2>{{ nominee.name }}</h2>
                        <p><strong>Resides:</strong> {{ nominee.reside }}</p>
                      </ion-label>
                      <ion-icon :icon="chevronForwardOutline" slot="end" />
                    </ion-item>
                  </ion-card-header>

                  <ion-card-content>
                    <ion-list lines="none">
                      <ion-item
                        :detail="false"
                        button
                        @click="goToNomineeDetail(nominee.id)">
                        <ion-label>
                          <h3>About {{ nominee.name }}</h3>
                        </ion-label>
                      </ion-item>
                    </ion-list>
                  </ion-card-content>
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
  const url = `${import.meta.env.BASE_URL}assets/pdf/${filename}`;
  console.log(`Opening PDF: ${url}`);
  window.open(url, '_blank');
};

</script>

<style scoped>
.section-intro {
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
.business-page {
  font-size: 1.125rem; 
  
}

.business-page ion-card-title,
.business-page ion-card-content p,
.business-page ion-label,
.business-page h2,
.business-page h3 {
  font-size: inherit;
  line-height: inherit;
}
.business-page ion-card-title {
  font-weight: 600;
}

.business-page strong {
  font-weight: 600;
}
.business-page ::v-deep ion-card-title,
.business-page ::v-deep ion-card-content,
.business-page ::v-deep ion-card-content p {
  font-size: 1.125rem;
}

.board-nominees-card ion-card-content {
  font-size: inherit;
  padding: 8px;
}

.board-nominees-card ion-grid {
  margin: 0;
}

.board-nominees-card ion-col {
  padding: 0;
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

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin: 24px 0 16px 8px;
}
ion-avatar img {
  object-fit: cover;
}

</style>
