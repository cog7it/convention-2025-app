<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultHref"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="toggleFavorite">
            <ion-icon v-if="!isFavorite" slot="icon-only" :icon="starOutline"></ion-icon>
            <ion-icon v-if="isFavorite" slot="icon-only" :icon="star"></ion-icon>
          </ion-button>
          <!-- Added share button functionality -->
          <ion-button @click="shareSession">
            <ion-icon slot="icon-only" :icon="share"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-padding" v-if="session">
        <!-- Session Name -->
        <h1>{{ session.name }}</h1>

        <!-- Time & Location -->
        <ion-text color="medium">
          {{ session.timeStart }} &ndash; {{ session.timeEnd }}
          <br />
          {{ session.location }}
        </ion-text>

        <!-- Title -->
        <p v-if="session.title"><strong>Sermon Title:</strong> {{ session.title }}</p>

        <!-- Description -->
        <p v-if="session.description">
          <strong>Description:</strong> {{ session.description }}
        </p>


        <!-- Speaker Names -->
        <p v-if="session.speakerNames?.some(name => name.trim() !== '')">
          <strong>Speakers:</strong> {{ session.speakerNames.join(', ') }}
        </p>


        <!-- About Sermon -->
        <p v-if="session.aboutSermon"><strong>About Sermon:</strong> {{ session.aboutSermon }}</p>
      </div>


    
      <ion-list>
        <!--
        <ion-item button>
          <ion-label color="primary">Watch</ion-label>
        </ion-item>
        -->
        <ion-item button @click="addToCalendar">
          <ion-label color="primary">Add to Calendar</ion-label>
        </ion-item>

       <!--
        <ion-item button>
          <ion-label color="primary">Mark as Unwatched</ion-label>
        </ion-item>
        

        <ion-item button>
          <ion-label color="primary">Download Video</ion-label>
          <ion-icon
            slot="end"
            color="primary"
            size="small"
            :icon="cloudDownload"
          ></ion-icon>
        </ion-item>
        -->
        <ion-item
          button
          :href="`mailto:conference@cog7.org?subject=Feedback on Session: ${encodeURIComponent(session?.name || '')}`"
        >
          <ion-label color="primary">Leave Feedback</ion-label>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<style scoped>

.session-detail {
  font-size: 1.125rem;
}

.session-detail p,
.session-detail h1,
.session-detail ion-text,
.session-detail strong {
  font-size: inherit;
  line-height: inherit;
}


.session-track-registration {
  color: var(--ion-color-gcblue);
}



.session-track-ionic {
  color: var(--ion-color-primary);
}

.session-track-vue {
  color: var(--ion-color-vue);
}

.session-track-communication {
  color: var(--ion-color-communication);
}

.session-track-tooling {
  color: var(--ion-color-tooling);
}

.session-track-services {
  color: var(--ion-color-services);
}

.session-track-design {
  color: var(--ion-color-design);
}

.session-track-workshop {
  color: var(--ion-color-workshop);
}

.session-track-food {
  color: var(--ion-color-food);
}

.session-track-documentation {
  color: var(--ion-color-documentation);
}

.session-track-navigation {
  color: var(--ion-color-navigation);
}

/* Favorite Icon
 * --------------------------------------------------------
 */

.show-favorite {
  position: relative;
}

.icon-heart-empty,
.icon-heart {
  --border-radius: 50%;
  --padding-start: 0;
  --padding-end: 0;

  position: absolute;

  top: 5px;
  right: 5px;

  width: 48px;
  height: 48px;

  transition: transform 300ms ease;

  font-size: 16px;
}

.icon-heart-empty {
  transform: scale(1);
}

.icon-heart {
  transform: scale(0);
}

.show-favorite .icon-heart {
  transform: scale(1);
}

.show-favorite .icon-heart-empty {
  transform: scale(0);
}

h1 {
  margin: 0;
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  alertController,
  IonBackButton,
  IonText,
} from '@ionic/vue';
import {
  star,
  starOutline,
  share,
  cloudDownload
} from "ionicons/icons";
import { Session } from '@/store/modules/sessions';

const route = useRoute();
const store = useStore();
const defaultHref = "/tabs/schedule";

const session = ref<Session>();
const isFavorite = computed(() => {
  if (!session.value) return false;
  return store.state.sessions.favoriteSessions.includes(session.value.id);
});

const toggleFavorite = () => {
  if (!session.value) return;

  if (isFavorite.value) {
    store.dispatch("removeFavorite", session.value.id);
  } else {
    store.dispatch("addFavorite", session.value.id);
  }
};
// allows users to add to calendar
const addToCalendar = () => {
  if (!session.value) return;

  const title = encodeURIComponent(session.value.name);
  const location = encodeURIComponent(session.value.location || '');
  const description = encodeURIComponent(session.value.description || '');

  const dateString = `${session.value.groupTime}, 2025 ${session.value.timeStart}`;
  const start = new Date(dateString);
  const end = new Date(start);
  end.setHours(end.getHours() + 1);

  const startTime = start.toISOString().replace(/-|:|\.\d\d\d/g, '');
  const endTime = end.toISOString().replace(/-|:|\.\d\d\d/g, '');

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${description}&location=${location}`;

  window.open(url, '_blank');
};

/* Possibly allows you to use all calendars. Test later
const addToCalendar = () => {
  if (!session.value) return;

  const title = session.value.name;
  const location = session.value.location || '';
  const description = session.value.description || '';
  const start = new Date(); // Replace with parsed session.start if needed
  const end = new Date();
  end.setHours(end.getHours() + 1);

  const formatDate = (date: Date) =>
    date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${formatDate(start)}
DTEND:${formatDate(end)}
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${title.replace(/\s+/g, '-')}.ics`;
  link.click();
};

*/

// Added share functionality
const shareSession = async () => {
  if (navigator.share && session.value) {
    try {
      await navigator.share({
        title: session.value.name,
        text: `Check out this session: ${session.value.name}`,
        url: window.location.href
      });
    } catch (err) {
      console.error('Error sharing session:', err);
    }
  } else {
    const alert = await alertController.create({
      header: 'Sharing Not Supported',
      message: 'Your browser does not support the Web Share API.',
      buttons: ['OK']
    });
    await alert.present();
  }
};

onMounted(async () => {
  // Check if sessions are loaded, if not load them
  if (store.state.sessions.sessions.length === 0) {
    await store.dispatch("loadSessionData");
  }

  session.value = store.state.sessions.sessions.find(
    (s) => s.id === parseInt(route.params.sessionId.toString())
  );
});
</script>
