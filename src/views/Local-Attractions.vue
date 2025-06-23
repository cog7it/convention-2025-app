<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Add the ion-menu-button -->
        <ion-buttons slot="start">
          <ion-menu-button class="menu-button"></ion-menu-button>
        </ion-buttons>
        <ion-title>Local Attractions</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col
            size="12"
            size-md="6"
            v-for="(attraction, index) in attractions"
            :key="index"
          >
            <ion-card button @click="goToAttraction(attraction.id)" class="attraction-card">
              <img :src="attraction.image" alt="Attraction Image" />
              <ion-card-header>
                <ion-card-title>{{ attraction.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>{{ attraction.description }}</p>
              </ion-card-content>
            </ion-card>
          </ion-col>

        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';

export default {
  name: 'LocalAttractions',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  },
  data() {
    return {
      attractions: []
    };
  },
  mounted() {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        if (data.attractions) {
          this.attractions = data.attractions;
        } else {
          console.error('No attractions data found in data.json.');
        }
      })
      .catch(error => {
        console.error('Failed to fetch attractions:', error);
      });
  },
  methods: {
    goToAttraction(id) {
      console.log('Navigating to attraction with ID:', id);
      this.$router.push({ name: 'attraction-detail', params: { attractionId: id } });
    }
  }

};
</script>

<style scoped>
ion-card img {
  width: 100%;
  height: auto;
}

.clickable-card {
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.clickable-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
