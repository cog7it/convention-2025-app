<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="menu-button"></ion-menu-button>
        </ion-buttons>
        <ion-title>Special Thanks</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding special-thanks-page">

      <!-- Special Thanks Card -->
      
    <ion-card>
    <ion-card-header>
        <ion-card-title>Special Thanks</ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <p>Our special thanks to the following:</p>

        <p>• The hundreds of volunteers who donate their time and talents to
        make this event memorable. Without you, GC Convention 2025 would
        not have been possible. Thank you, volunteers, for your faithful
        service.</p>

        <p>• The General Conference staff who work tirelessly for months com-
        pleting the many tasks required for convention while continuing their

        daily duties. In the fall prior to the convention, IT staff begins creat-
        ing the information website and registration process. The convention

        printed program process begins in mid‑May when they edit, translate,
        design, and print the program. GC staff organizes registration packets,
        answers telephone calls and emails with questions about convention,

        and supports the Convention Committee. All of these activities are ac-
        complished in a professional, gracious manner. We are grateful. Please

        help us thank those staff members.</p>

        <p>Our Salt Lake City hosts that have assisted with details of this
        convention:</p>

        <ul>
        <li>Visit Salt Lake City</li>
        <li>Calvin L. Rampton Salt Palace Convention Center</li>
        <li>Marriott Downtown City Creek</li>
        <li>Holiday Inn Express</li>
        <li>Encore AV</li>
        <li>Sodexo Catering</li>
        </ul>
    </ion-card-content>
    </ion-card>


      <!-- Those Who Serve You Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Those Who Serve You</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Conference President:</strong> Loren Stacy</p>
          <p><strong>Conference Executive Director:</strong> Jody McCoy</p>

          <p><strong>Convention Committee:</strong><br />
            Mary Jean Knoll, Chair<br />
            Christy Lang<br />
            Kurt and Kristi Lang<br />
            Harold and Vona Ogren<br />
            Amber Michalak<br />
            Dawn Wayman<br />
            Tom and Esther Winchell
          </p>

          <p><strong>Convention Staff:</strong></p>
          <ul>
            <li><strong>Audio/Visual/Projection:</strong> Tony Ling, Richard Palmer, and Aaron Davila</li>
            <li><strong>Business Meeting:</strong> Dennis O’Banion</li>
            <li><strong>Children’s Program:</strong> Amanda Brown and Zahida Hrenyk</li>
            <li><strong>Exhibits:</strong> Christy Lang</li>
            <li><strong>First Aid Coordinators:</strong> Deborah Crayton and Crystal Beckman</li>
            <li><strong>Head Usher:</strong> David Babbitt</li>
            <li><strong>Meals:</strong> Esther Winchell</li>
            <li><strong>Nursery Coordinator:</strong> Jenny Stephens</li>
            <li><strong>Prayer Counselor:</strong> Tim Hinds</li>
            <li><strong>Promotions:</strong> Jamin Teran</li>
            <li><strong>Publications:</strong> Keith Michalak, Jason Overman and Sherri Langton</li>
            <li><strong>Registrar:</strong> Amber Michalak</li>
            <li><strong>Registration:</strong> Vona Ogren and Dawn Wayman</li>
            <li><strong>Security Coordinator:</strong> Tom Winchell</li>
            <li><strong>Technology:</strong> Chris Idemmili, Jody McCoy, Jeffrey Keim, Rick Frye and Jazmin Novak</li>
            <li><strong>Translation:</strong> Allo Sanchez</li>
            <li><strong>Voter Registration:</strong> Rex Miller</li>
            <li><strong>Workshops:</strong> Loren Stacy and Kurt Lang</li>
            <li><strong>Worship Team:</strong> Ruben Davila</li>
            <li><strong>Young Adult Program:</strong> Chris and Yared Banda</li>
            <li><strong>Youth Program:</strong> John Camero</li>
          </ul>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
</script>

<style scoped>

.special-thanks-page {
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
}

::v-deep(.special-thanks-page ion-card-content),
::v-deep(.special-thanks-page ion-card-content p),
::v-deep(.special-thanks-page ion-card-content ul),
::v-deep(.special-thanks-page ion-card-content li) {
  font-size: 1.125rem;
  line-height: 1.6;
}

::v-deep(.special-thanks-page ion-card-title) {
  font-size: 1.25rem;
}


</style>
