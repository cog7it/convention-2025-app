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
      attractions: [
        {
          name: 'FamilySearch Library',
          description: 'Explore your family history at the FamilySearch Library, offering free genealogy resources and assistance.',
          image: '/assets/img/local-attractions/matterport-resized.png'
        },
        {
          name: 'Great Salt Lake',
          description: 'Visit the largest saltwater lake in the Western Hemisphere, known for its unique ecosystem and scenic views.',
          image: '/assets/img/local-attractions/Great_Salt_Lake_Beach_resized.jpg'
        },
        {
          name: 'Park City',
          description: 'A charming mountain town offering shopping, dining, and outdoor activities, including the Utah Olympic Park.',
          image: '/assets/img/local-attractions/ParkCity.png'
        },
        {
          name: 'Antelope Island State Park',
          description: 'Home to free-ranging bison, pronghorn antelope, and other wildlife, with opportunities for hiking and photography.',
          image: '/assets/img/local-attractions/Arches.jpg'
        },
        {
          name: 'Thanksgiving Point',
          description: 'A multi-venue complex featuring gardens, museums, and family-friendly activities in Lehi, Utah.',
          image: '/assets/img/local-attractions/TP.jpg'
        },
        {
          name: 'Ashton Gardens',
          description: 'Fifty acres of themed gardens, including the Light of the World Garden with life-size sculptures.',
          image: '/assets/img/local-attractions/Ashton.jpg'
        },
        {
          name: 'Butterfly Biosphere',
          description: 'Experience thousands of butterflies and other insects in a tropical conservatory setting.',
          image: '/assets/img/local-attractions/butterfly.jpg'
        },
        {
          name: 'Curiosity Farms',
          description: 'An interactive farm exhibit showcasing modern agriculture and animal encounters.',
          image: '/assets/img/local-attractions/Curiosity.jpg'
        },
        {
          name: 'Museum of Ancient Life',
          description: 'One of the world’s largest dinosaur museums, featuring numerous fossil specimens and exhibits.',
          image: '/assets/img/local-attractions/Ancient.jpg'
        },
        {
          name: 'Museum of Natural Curiosity',
          description: 'A hands-on children’s museum with interactive exhibits promoting exploration and learning.',
          image: '/assets/img/local-attractions/MNC.jpg'
        },
        {
          name: 'The Carousel',
          description: 'Enjoy a nostalgic ride on a beautifully crafted, hand-painted carousel.',
          image: '/assets/img/local-attractions/Carousel.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
ion-card img {
  width: 100%;
  height: auto;
}
</style>
