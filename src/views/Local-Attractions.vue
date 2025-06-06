<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Local Attractions</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" v-for="attraction in attractions" :key="attraction.name">
            <ion-card>
              <img :src="attraction.image" alt="Attraction Image" />
              <ion-card-header>
                <ion-card-title>{{ attraction.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ attraction.description }}
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
  }
};
</script>

<style scoped>
ion-card img {
  width: 100%;
  height: auto;
}
</style>
