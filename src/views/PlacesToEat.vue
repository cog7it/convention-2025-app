<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Places to Eat</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col
            size="12"
            size-md="6"
            size-lg="4"
            v-for="(place, index) in foodPlaces"
            :key="index"
          >
            <ion-card @click="goToDetail(place)">
              <img :src="place.image" :alt="place.name" />
              <ion-card-header>
                <ion-card-title>{{ place.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ place.description }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "PlacesToEat",
  data() {
    return {
      foodPlaces: [],
    };
  },
  mounted() {
    fetch("/assets/data/data.json")
      .then((res) => res.json())
      .then((data) => {
        this.foodPlaces = data.food || [];
      });
  },
  methods: {
    goToDetail(place) {
      this.$router.push({
        name: "FoodDetail",
        params: {
          name: place.name,
          description: place.description,
          image: place.image,
          details: place.details,
        },
      });
    },
  },
};
</script>

<style scoped>
ion-card {
  cursor: pointer;
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
