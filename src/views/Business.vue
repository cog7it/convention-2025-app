<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/welcome"></ion-back-button>
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
          <!--
          <p class="section-intro">
            Watch the area below for useful information in the weeks before convention:
          </p>
          -->
        </ion-card-content>
      </ion-card>

      <!-- Board Nominees Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Board Nominees</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div class="nominees-grid">
            <ul>
              <li>Andrew Burnett</li>
              <li>Narciso A. Betances</li>
              <li>Robert Grabinsky</li>
              <li>Neftali Hernandez</li>
            </ul>
            <ul>
              <li>Samuel Holland</li>
              <li>David Lozano</li>
              <li>Oscar Mata</li>
              <li>Dennis O'Banion</li>
            </ul>
            <ul>
              <li>Richard Palmer</li>
              <li>Ramón Ruiz</li>
              <li>Jerad Ullrich</li>
              <li>Eduardo Villalba Jr.</li>
              <li>Ivan Villeda</li>
            </ul>
          </div>
        </ion-card-content>
      </ion-card>

      <!-- Helpful Resources Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Helpful Resources</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list class="pdf-list">
            <ion-item button @click="openPdf('Church_Manual-Eng-R2023.pdf')">
              <ion-label>Church Manual (English)</ion-label>
              <ion-icon name="arrow-forward-outline" slot="end"></ion-icon>
            </ion-item>

            <ion-item button @click="openPdf('Church_Manual-Sp-R2023.pdf')">
              <ion-label>Church Manual (Spanish)</ion-label>
              <ion-icon name="arrow-forward-outline" slot="end"></ion-icon>
            </ion-item>

            <ion-item button @click="openPdf('Membership Application-Eng 2021.pdf')">
              <ion-label>Membership Application (English)</ion-label>
              <ion-icon name="arrow-forward-outline" slot="end"></ion-icon>
            </ion-item>

            <ion-item button @click="openPdf('Membership Application-Sp 2021.pdf')">
              <ion-label>Membership Application (Spanish)</ion-label>
              <ion-icon name="arrow-forward-outline" slot="end"></ion-icon>
            </ion-item>

            <ion-item button @click="openPdf('Amendments-2025.pdf')">
              <ion-label>Proposed Amendments</ion-label>
              <ion-icon name="arrow-forward-outline" slot="end"></ion-icon>
            </ion-item>

            <ion-item button @click="openPdf('2025-Nominees.pdf')">
              <ion-label>Board Nominees (More Info)</ion-label>
              <ion-icon name="arrow-forward-outline" slot="end"></ion-icon>
            </ion-item>
          </ion-list>
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
  IonIcon
} from '@ionic/vue';
import { arrowForwardOutline } from 'ionicons/icons';

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

.nominees-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.nominees-grid ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0;
  flex: 1 1 200px;
}

.pdf-list ion-item {
  --background: #f4f4f4;
  --color: #000;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.pdf-list ion-icon {
  font-size: 18px;
  color: var(--ion-color-primary);
}
</style>
