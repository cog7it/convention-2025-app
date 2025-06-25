<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Report a Bug</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="support-logo">
        <img src="/assets/img/Conference Logo_Icon.png" alt="App Logo" />
      </div>

      <ion-button
        expand="block"
        color="primary"
        :href="mailtoLink"
        target="_blank"
      >
        Email Support Team
      </ion-button>
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
  IonButton,
} from '@ionic/vue';

const mailtoLink = 'mailto:webmaster@cog7.org?subject=Bug%20Report&body=Please%20describe%20the%20issue%20you%20encountered:';
</script>

<style scoped>
.support-logo {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}

.support-logo img {
  max-width: 150px;
}
</style>
