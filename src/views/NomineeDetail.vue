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
        <h2>{{ nominee?.name || 'Loading...' }}</h2>
      </div>

      <!-- Main Content in a card -->
      <ion-card class="nominee-info-card">
        <ion-card-content>
            <p><strong>Resides:</strong> {{ nominee?.reside }}</p>
            <p><strong>Wife:</strong> {{ nominee?.wife }}</p>
            <p><strong>Children:</strong> {{ nominee?.children }}</p>
            <p><strong>Church Activities:</strong> {{ nominee?.churchActivities }}</p>
            <p><strong>Education:</strong> {{ nominee?.education }}</p>
            <p><strong>Work & Leadership:</strong> {{ nominee?.workLeadership }}</p>
            <p><strong>Ministry Highlights:</strong> {{ nominee?.ministryHighlights }}</p>
        </ion-card-content>
        </ion-card>

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
  IonBackButton,
  IonCard
} from '@ionic/vue';
import { useRoute } from 'vue-router';
import { useStore } from '@/store';
import { ref, onBeforeMount, watch } from 'vue';
import { Nominee } from '@/store/modules/nominees';

const store = useStore();
const route = useRoute();
const nominee = ref<Nominee | null>(null);

onBeforeMount(async () => {
  if (store.state.nominees.nominees.length === 0) {
    await store.dispatch('loadNomineeData');
  }

  const id = Number(route.params.nomineeId);
  nominee.value = store.getters['getNomineeById'](id);
});

watch(() => route.params.nomineeId, (newId) => {
  if (newId) {
    nominee.value = store.getters['getNomineeById'](Number(newId));
  }
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
  aspect-ratio: 1/1;
  margin-top: calc(-1 * var(--ion-safe-area-top));
  border-radius: 50%;
  object-fit: cover;
}

.nominee-background h2 {
  margin-top: 10px;
  color: white;
}

.nominee-info-card {
  margin: 16px;
  border-radius: 12px;
}

/* Apply font size inside IonCard using deep selector */
.nominee-detail ::v-deep ion-card-content,
.nominee-detail ::v-deep ion-card-content p {
  font-size: 1.125rem;
}

.nominee-info-card p {
  margin-bottom: 0.75rem;
}

.nominee-info-card p {
  margin-bottom: 0.75rem;
}
</style>
