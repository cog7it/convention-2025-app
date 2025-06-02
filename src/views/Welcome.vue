<template>
  <ion-page>
    <ion-content>
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

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
  IonButtons
} from '@ionic/vue';
</script>

<style scoped>
ion-toolbar {
  --background: transparent;
  --color: white;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

ion-toolbar ion-menu-button {
  --color: white;
}

.about-header {
  position: relative;
  width: 100%;
  height: 30%;
}

.about-header .about-image {
  position: absolute;
  inset: 0;
  transition: opacity 500ms ease-in-out;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0;
}

.about-header .welcome {
  background-image: url("/assets/img/about/welcome4.png");
  opacity: 1;
}

.about-info {
  position: absolute;
  margin-top: -10px;
  border-radius: 10px;
  background: var(--ion-background-color, #ffffff);
  width: 100%;
}

.about-info h1 {
  color: var(--ion-color-primary);
  font-size: 1.8rem;
  font-weight: bold;
}

.about-info p {
  color: var(--ion-color-dark);
  line-height: 1.5;
  font-size: 1rem;
}
</style>
