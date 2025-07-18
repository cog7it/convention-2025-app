<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Speakers</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="speaker-page">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Speakers</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid fixed>
        <ion-row>
          <ion-col
            v-for="speaker in speakers"
            :key="speaker.id"
            size="12"
            size-md="6"
          >
            <ion-card class="speaker-card">
              <!-- Top of card: go to sermon mode -->
              <ion-card-header>
                <ion-item
                  :detail="false"
                  lines="none"
                  class="speaker-item"
                  button
                  @click="navigateToSpeaker(speaker.id, 'sermon')"
                >
                  <ion-avatar slot="start">
                    <img
                      :src="speaker.profilePic"
                      :alt="speaker.name + ' profile picture'"
                    />
                  </ion-avatar>
                  <ion-label>
                    <h2>{{ speaker.name }}</h2>
                    <p>{{ speaker.title }}</p>
                    <p v-if="speaker.dateSpoken" class="speaker-date">{{ speaker.dateSpoken }}</p>
                  </ion-label>
                </ion-item>
              </ion-card-header>

              <!-- Card content with session list and About button -->
              <ion-card-content>
                <ion-list lines="none">
                  <ion-item
                    v-for="session in sessionsBySpeaker(speaker.id)"
                    :key="session.id"
                    :detail="false"
                    button
                    @click="navigateToSession(session.id)"
                  >
                    <ion-label>
                      <h3>{{ session.name }}</h3>
                    </ion-label>
                  </ion-item>

                  <!-- Bottom: go to bio mode -->
                  <ion-item
                    :detail="false"
                    button
                    @click="navigateToSpeaker(speaker.id, 'bio')"
                  >
                    <ion-label>
                      <h3>About {{ speaker.name }}</h3>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { Speaker } from "@/store/modules/speakers";
import { Session } from "@/store/modules/sessions";
import { useStore } from "@/store";
import { useRouter } from 'vue-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonList,
  IonItem,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonAvatar,
} from "@ionic/vue";

const router = useRouter();
const store = useStore();

const speakers = computed(() =>
  store.state.speakers.speakers.concat().sort((a, b) => a.name.localeCompare(b.name))
);

const sessionsBySpeaker = (speakerId: number) => {
  return store.state.sessions.sessions.filter((session: Session) => {
    const isLoren = speakerId === 5;
    const isExcludedSession = String(session.id) === "106";
    return session.speakerIds.includes(speakerId) && !(isLoren && isExcludedSession);
  });
};


const navigateToSpeaker = (id: number, mode: 'sermon' | 'bio' = 'sermon') => {
  router.push(`/tabs/speakers/speaker/${id}?mode=${mode}`);
};


onMounted(async () => {
  if (store.state.speakers.speakers.length === 0) {
    await store.dispatch("loadSpeakerData");
  }
  if (store.state.sessions.sessions.length === 0) {
    await store.dispatch("loadSessionData");
  }
});
</script>

<style scoped>

.speaker-page {
  font-size: 1.125rem; 
}

.speaker-page h2,
.speaker-page h3,
.speaker-page p,
.speaker-page ion-label {
  font-size: inherit;
  line-height: inherit;
}

.speaker-card {
  display: flex;
  flex-direction: column;
}

ion-col:not(:last-of-type) .speaker-card {
  margin-bottom: 0;
}

.speaker-card .speaker-item {
  --min-height: 85px;
}

.speaker-card .speaker-item h2,
.speaker-card .speaker-item p {
  font-size: inherit;
}


.speaker-card ion-card-header {
  padding: 0;
}

.speaker-card ion-card-content {
  flex: 1 1 auto;
  padding: 0;
}

.ios ion-list {
  margin-bottom: 10px;
}

.md ion-list {
  padding: 0;
  border-top: 1px solid var(--ion-color-step-150, #d7d8da);
}
</style>
