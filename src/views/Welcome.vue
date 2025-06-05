<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <!-- Hero Image Section -->
      <div class="welcome-banner">
        <img src="/assets/img/about/welcome4.png" alt="Engage Utah 2025" />
      </div>

      <!-- Content Section -->
      <div class="about-info">
        <h1 class="ion-padding-top ion-padding-start">Welcome</h1>

        <p class="ion-padding-start ion-padding-end">
          Welcome to the 2025 Convention of the General Conference of the Church of God (Seventh Day) in beautiful Salt Lake City, Utah! Have you had an opportunity to savor the beauty of God’s creation all around us? Take time to enjoy the majestic mountains surrounding us and to visit some of the other natural vistas nearby. And be prepared for time with your brothers and sisters in the family of God. We have said it before and we will say it again – it is like a big family reunion. We hope you feel the warmth and love of your big family.
        </p>

        <p class="ion-padding-start ion-padding-end">
          This week, you will have many opportunities to experience life within the family. As with all families, change is inevitable. This week, some of those changes will be introduced – retiring personnel, new leaders, enhanced programs. Members have an opportunity to help select members to the Board of Directors, to attend workshops encouraging each of us to engage in the work of spreading the gospel of Jesus Christ. Classes for all ages, seminars, sermons – all prepared to encourage and expand our perspective and participation in impacting our world with the love of Jesus Christ.
        </p>

        <p class="ion-padding-start ion-padding-end">
          The theme of this year's Convention is <strong>"Engage"</strong> (<em>Galatians 6:9-10</em>). Our hope is that you will be motivated, encouraged and equipped to participate in the activity of the Kingdom as our almighty Lord has called and designed you to do. Connect with the Father, come alongside your brothers and sisters in Christ, and enjoy sweet fellowship in the Holy Spirit.
        </p>

        <p class="ion-padding-start ion-padding-end">
          Your map to adventure is found in this program. Come along for the journey. Our prayers are that you will be involved learners and leave this place as engaged followers of Jesus. Enjoy the journey!
        </p>

        <p class="ion-padding-start ion-padding-end">
          <strong>Your Convention Planning Committee</strong>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonTitle
} from '@ionic/vue';
</script>

<style scoped>
.welcome-banner {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
}

.welcome-banner img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}



.about-info {
  border-radius: 10px;
  background: var(--ion-background-color);
  color: var(--ion-text-color);
  width: 100%;
}

.about-info h1,
.about-info p {
  color: var(--ion-text-color);
  line-height: 1.5;
  font-size: 1rem;
}

ion-toolbar {
  --background: var(--ion-background-color);
  --color: var(--ion-text-color);
}

ion-toolbar ion-menu-button {
  --color: var(--ion-text-color);
}
</style>
