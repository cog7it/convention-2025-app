<template>
  <ion-app>
    <ion-split-pane content-id="main-content" v-if="!isTutorialPage">
      <Menu :dark="dark" @dark-mode-changed="handleDarkModeChanged" />
      <ion-router-outlet id="main-content" />
    </ion-split-pane>
    <ion-router-outlet v-else />
    <div v-if="showInstallPrompt" class="install-banner">
      <p>Install this app for the best experience!</p>
      <div>
        <button @click="triggerInstall">Install App</button>
        <button class="maybe-later" @click="dismissPrompt">Maybe Later</button>
      </div>
    </div>

<button 
  v-if="showInstallButton && !showInstallPrompt" 
  class="install-fab" 
  @click="triggerInstall">
  Install App
</button>
  </ion-app>
</template>

<style src='./theme/variables.css'></style>
<style>.install-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #317EFB;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.install-banner button {
  margin-left: 1em;
  background: white;
  color: #317EFB;
  border: none;
  padding: 0.5em 1em;
  font-weight: bold;
  cursor: pointer;
}

.install-fab {
  position: fixed;
  bottom: 1.5em;
  right: 1.5em;
  background: #317EFB;
  color: white;
  border: none;
  padding: 1em;
  border-radius: 50%;
  font-size: 1.5em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1000;
}

  .install-banner .maybe-later {
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5em 1em;
  font-weight: normal;
  margin-left: 0.5em;
}


</style>

<script lang="ts">
import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/vue';
import { Ref, defineComponent, onMounted, ref, computed } from 'vue';
import Menu from "./components/Menu.vue";
import { useStore } from '@/store';
import { Storage } from '@ionic/storage';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonSplitPane,
    IonRouterOutlet,
    Menu,
  },
  setup() {
    let dark: Ref<boolean> = ref(false);
    const route = useRoute();
    const store = useStore();
    const dismissPrompt = () => {
      showInstallPrompt.value = false;
    };

    const isTutorialPage = computed(() => {
      return route.name === 'tutorial';
    });

    async function initializeStorage() {
      const storage = new Storage();
      await storage.create();
      return storage;
    }

    const handleDarkModeChanged = (newDarkValue: boolean) => {
      dark.value = newDarkValue;
      document.documentElement.classList.toggle('ion-palette-dark', newDarkValue);
    };

    const deferredPrompt: Ref<Event | null> = ref(null);
    const showInstallPrompt: Ref<boolean> = ref(false);
    const showInstallButton: Ref<boolean> = ref(false);

    const triggerInstall = () => {
    if (deferredPrompt.value) {
      (deferredPrompt.value as any).prompt();
      (deferredPrompt.value as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt.value = null;
        showInstallPrompt.value = false;
        showInstallButton.value = false;
      });
    }
  };

    onMounted(async () => {
      await initializeStorage();
      store.dispatch("loadSessionData");
      store.dispatch("loadSpeakerData");
      await store.dispatch("fetchTracks");

      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt.value = e;
        showInstallPrompt.value = true;
        showInstallButton.value = true;
      });
    });

    return {
      dark,
      handleDarkModeChanged,
      isTutorialPage,
      showInstallPrompt,
      triggerInstall,
      dismissPrompt,
    };
  },
});
</script>
