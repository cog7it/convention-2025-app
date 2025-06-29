<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="menu-button"></ion-menu-button>
        </ion-buttons>
        <ion-title>Feedback</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>We'd love your feedback!</h2>
      <p>If you have thoughts on how we can improve the app or the event experience, please email us directly:</p>
      <ion-button
        expand="block"
        color="primary"
        href="mailto:conventioninfo@cog7.org?subject=Convention Feedback"
      >
        Send Feedback via Email
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
  IonBackButton,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue';
</script>
