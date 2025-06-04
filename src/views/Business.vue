<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Business</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <h2>General Conference Business</h2>
      <p>
        General Conference Convention is where we conduct the business of the Church of God (Seventh Day). 
        All members present at convention have a vote in the proceedings and decisions, including electing 
        the board of directors. Help fulfill this responsibility.
      </p>

      <ion-card>
        <ion-card-header>
          <ion-card-title>Church Manual (English)</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-button expand="block" @click="openPdf('Church_Manual-Eng-R2023.pdf')">
            View PDF
          </ion-button>
        </ion-card-content>
      </ion-card>

      <ion-note>More documents coming soon…</ion-note>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonNote
} from '@ionic/vue';

import { Filesystem, Directory } from '@capacitor/filesystem';
import { FileOpener } from '@capacitor-community/file-opener';

const openPdf = async (filename: string) => {
  const path = `assets/pdf/${filename}`;

  try {
    const response = await fetch(path);
    const blob = await response.blob();

    const base64Data = await convertBlobToBase64(blob) as string;

    await Filesystem.writeFile({
      path: filename,
      data: base64Data,
      directory: Directory.Documents,
      recursive: true
    });

    await FileOpener.open({
      filePath: `${Directory.Documents}/${filename}`,
      contentType: 'application/pdf'
    });
  } catch (error) {
    console.error('Error opening PDF:', error);
  }
};

const convertBlobToBase64 = (blob: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
</script>

<style scoped>
h2 {
  margin-top: 16px;
}

ion-note {
  display: block;
  margin-top: 24px;
  text-align: center;
  font-style: italic;
  color: var(--ion-color-medium);
}
</style>
