<template>
  <ion-page>
    <ion-content class="nominee-detail">
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/tabs/business"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <!-- Header with dark background and centered avatar -->
      <div class="nominee-background">
        <img :src="nominee?.profilePic || '/assets/img/placeholder.png'" :alt="nominee?.name" />
        <h2>{{ nominee?.name }}</h2>
      </div>

      <!-- Main Content -->
      <div class="ion-padding info">
        <p><strong>Resides:</strong> {{ nominee?.reside }}</p>
        <p><strong>Wife:</strong> {{ nominee?.wife }}</p>
        <p><strong>Children:</strong> {{ nominee?.children }}</p>
        <p><strong>Church Activities:</strong> {{ nominee?.churchActivities }}</p>
        <p><strong>Education:</strong> {{ nominee?.education }}</p>
        <p><strong>Work & Leadership:</strong> {{ nominee?.workLeadership }}</p>
        <p><strong>Ministry Highlights:</strong> {{ nominee?.ministryHighlights }}</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import { onMounted, ref } from 'vue';

const store = useStore();
const route = useRoute();
const nominee = ref();

onMounted(() => {
  const id = Number(route.params.nomineeId);
  nominee.value = store.getters['getNomineeById'](id);
});
</script>

<style scoped>
/* Header image & layout like speaker detail */
.nominee-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 260px;
  padding-top: var(--ion-safe-area-top);
  background-color: #3a3a3a;
}

.nominee-background img {
  width: 130px;
  height: 130px;
  margin-top: calc(-1 * var(--ion-safe-area-top));
  border-radius: 50%;
}

.nominee-background h2 {
  margin-top: 10px;
  color: white;
}

.info {
  text-align: left;
}

.info p {
  margin-bottom: 0.75rem;
}
</style>
