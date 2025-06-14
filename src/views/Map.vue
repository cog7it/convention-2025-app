<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Map</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div ref="mapCanvas" class="map-canvas"></div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.map-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 150ms ease-in;
  background-color: transparent;
  opacity: 0;
}

.show-map {
  opacity: 1;
}
</style>

<script lang="ts">
import { defineComponent, computed, onMounted, onActivated, ref, watch } from 'vue';
import { useStore } from '@/store';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import L from 'leaflet';
import { Location } from '@/store/modules/locations';
import 'leaflet/dist/leaflet.css';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix for marker icons in Vite
L.Icon.Default.prototype.options.iconUrl = markerIconUrl;
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;
L.Icon.Default.imagePath = '';

export default defineComponent({
  name: 'MapView',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
  },
  setup() {
    const store = useStore();
    const mapCanvas = ref<HTMLElement | null>(null);
    const map = ref<L.Map | null>(null);
    const markers = ref<L.Marker[]>([]);

    const locations = computed(() => store.state.locations.locations);
    const mapCenter = computed(() => {
      return store.state.locations.locations.find(
        (location: Location) => location.center
      );
    });

    const initializeMap = () => {
      if (!mapCanvas.value || !mapCenter.value) return;

      // Remove existing map
      if (map.value) {
        map.value.remove();
        markers.value.forEach(marker => marker.remove());
        markers.value = [];
      }

      // Initialize new map
      const mapInstance = L.map(mapCanvas.value).setView(
        [mapCenter.value.lat, mapCenter.value.lng],
        16
      );
      map.value = mapInstance;

      // Tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance);

      // Add markers with popups
      locations.value.forEach((location: Location) => {
        const address = `${location.lat}, ${location.lng}`;
        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        const appleMapsLink = `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

        const popupContent = `
          <div>
            <strong>${location.name}</strong><br/>
            <small>${address}</small><br/><br/>
            <a href="${googleMapsLink}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a><br/>
            <a href="${appleMapsLink}" target="_blank" rel="noopener noreferrer">Open in Apple Maps</a>
          </div>
        `;

        const marker = L.marker([location.lat, location.lng])
          .addTo(mapInstance)
          .bindPopup(popupContent);

        markers.value.push(marker);
      });

      mapCanvas.value.classList.add("show-map");

      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 100);
    };

    onMounted(async () => {
      if (store.state.locations.locations.length === 0) {
        await store.dispatch('locations/loadLocations');
      }
      initializeMap();
    });

    onActivated(() => {
      if (map.value) {
        map.value.invalidateSize();
      } else if (store.state.locations.locations.length > 0) {
        initializeMap();
      }
    });

    watch(() => locations.value, () => {
      if (map.value) {
        initializeMap();
      }
    });

    return {
      mapCanvas
    };
  }
});
</script>
