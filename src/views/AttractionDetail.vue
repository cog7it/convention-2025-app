<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs/local-attractions"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ attraction?.name || 'Attraction Details' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="attraction-background">
        <img :src="attraction?.image" alt="Attraction Image" class="attraction-image" />
        <h2>{{ attraction?.name }}</h2>
      </div>

      <div class="ion-padding content-left">
        <p class="description">{{ attraction?.description }}</p>

        <p v-if="attraction?.address"><strong>Address:</strong> {{ attraction.address }}</p>

        <div class="map-buttons" v-if="attraction?.address">
            <ion-button fill="outline" size="small" @click="openInMaps">Open in Maps</ion-button>
        </div>


        <ion-list>
            <ion-item v-if="attraction?.hours">
            <ion-label>
                <strong>Hours:</strong>
                <div v-html="attraction.hours.replace(/\n/g, '<br>')"></div>
            </ion-label>
            </ion-item>


            <ion-item v-if="attraction?.holidayHours">
            <ion-label>
                <strong>Holiday Hours:</strong>
                <div v-html="attraction.holidayHours.replace(/\\n/g, '<br>')"></div>
            </ion-label>
            </ion-item>




          <ion-item v-if="attraction?.specialNote">
            <ion-label>
                <strong>Note:</strong>
                <div v-html="attraction.specialNote.replace(/\n/g, '<br>')"></div>
            </ion-label>
            </ion-item>

          <ion-item v-if="attraction?.link">
            <ion-label><strong>Website:</strong> <a :href="attraction.link" target="_blank">Visit Website</a></ion-label>
          </ion-item>

          <ion-item v-if="attraction?.distance">
            <ion-label><strong>Distance from Convention:</strong> {{ attraction.distance }}</ion-label>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/vue';

export default {
  name: 'AttractionDetail',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  },
  data() {
    return {
      attraction: null
    };
  },
  mounted() {
    const id = this.$route.params.attractionId;
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        this.attraction = data.attractions.find(a => String(a.id) === id);
      })
      .catch(err => console.error('Error fetching attraction details:', err));
  },
  methods: {
  openInMaps(provider) {
    if (!this.attraction?.address) return;
    const encoded = encodeURIComponent(this.attraction.address);
    if (provider === 'apple') {
      window.open(`http://maps.apple.com/?q=${encoded}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
    }
  }
}

};
</script>

<style scoped>
.attraction-background {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2f2f2f;
  padding: 32px 16px;
  text-align: center;
}

.attraction-image {
  width: 180px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 12px;
}

.attraction-background h2 {
  color: #fff;
  margin: 0;
}

.content-left {
  max-width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  text-align: left;
}

.description {
  font-weight: 500;
  margin-bottom: 12px;
}

.map-buttons {
  display: flex;
  gap: 10px;
  margin: 8px 0 16px;
}
</style>
