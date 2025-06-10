<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/places-to-eat"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ food.name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="food-detail-container">
        <img :src="food.image" :alt="food.name" class="food-image" />
        <h2>{{ food.name }}</h2>
        <p>{{ food.description }}</p>
        <ion-button :href="food.website" target="_blank" color="primary" v-if="food.website">
          Visit Website
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { useRoute } from 'vue-router';
import data from '@/data/data.json';

export default {
  name: 'FoodDetail',
  setup() {
    const route = useRoute();
    const foodId = route.params.id;
    const food = data.food.find(item => item.id === foodId);

    return { food };
  }
};
</script>

<style scoped>
.food-detail-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

.food-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
