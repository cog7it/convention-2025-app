<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Business</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding business-page">
      <!-- Header with Background Color and Centered Image -->
      <div class="business-header">
        <img src="/assets/img/favicon.png" alt="Business Image" />
      </div>

      <!-- Main Content -->
      <section>
        <h2>General Conference Business</h2>
        <p>
          General Conference Convention is where we conduct the business of the Church of God (Seventh Day). 
          All members present at convention have a vote in the proceedings and decisions, including electing 
          the board of directors. Help fulfill this responsibility.
        </p>

        <p class="section-intro">
          Watch the area below for useful information in the weeks before convention:
        </p>

        <div class="pdf-buttons">
          <ion-button fill="outline" @click="openPdf('Church_Manual-Eng-R2023.pdf')">
            Church Manual (English)
          </ion-button>
          <ion-button fill="outline" @click="openPdf('Church_Manual-Spanish.pdf')">
            Church Manual (Spanish)
          </ion-button>
          <ion-button fill="outline" @click="openPdf('Membership_Application-English.pdf')">
            Membership Application (English)
          </ion-button>
          <ion-button fill="outline" @click="openPdf('Membership_Application-Spanish.pdf')">
            Membership Application (Spanish)
          </ion-button>
          <ion-button fill="outline" @click="openPdf('Proposed_Amendments.pdf')">
            Proposed Amendments
          </ion-button>
          <ion-button fill="outline" @click="openPdf('Board_Nominees.pdf')">
            Board Nominees (More Info)
          </ion-button>
        </div>
      </section>

      <section>
        <h3>Board Nominees</h3>
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
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue';

const openPdf = (filename: string) => {
  window.open(`/assets/pdf/${filename}`, '_blank');
};
</script>

<style scoped>
.business-header {
  background-color: #2f2f2f; /* Deep blue; adjust to match your theme */
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 0 0 10px 10px;
}

.business-header img {
  max-height: 100px;
  width: auto;
  object-fit: contain;
}

.business-page section {
  margin-bottom: 2rem;
}

.section-intro {
  font-weight: 500;
  margin-top: 1rem;
}

.pdf-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
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
</style>
