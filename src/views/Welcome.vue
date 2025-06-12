<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="--background: #ffffff; --color: #000000;">
        <ion-buttons slot="start">
          <ion-menu-button style="--color: #000000;"></ion-menu-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="no-padding">
      <!-- Hero Image Section -->
      <div class="banner-container">
        <img src="/assets/img/about/welcome4.png" alt="Engage Utah 2025" class="banner-image" />
      </div>

      <!-- Wave Divider -->
      <div class="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f7941d" />
        </svg>
      </div>

      <!-- Welcome Message -->
      <div class="welcome-content">
        <div class="section-header">
          <h4>Welcome</h4>
        </div>
        <p>
          Welcome to the 2025 Convention of the General Conference of the Church of God (Seventh Day) in beautiful Salt Lake City, Utah! Have you had an opportunity to savor the beauty of God’s creation all around us? Take time to enjoy the majestic mountains surrounding us and to visit some of the other natural vistas nearby. And be prepared for time with your brothers and sisters in the family of God. We have said it before and we will say it again – it is like a big family reunion. We hope you feel the warmth and love of your big family.
        </p>
        <p>
          This week, you will have many opportunities to experience life within the family. As with all families, change is inevitable. This week, some of those changes will be introduced – retiring personnel, new leaders, enhanced programs. Members have an opportunity to help select members to the Board of Directors, to attend workshops encouraging each of us to engage in the work of spreading the gospel of Jesus Christ. Classes for all ages, seminars, sermons – all prepared to encourage and expand our perspective and participation in impacting our world with the love of Jesus Christ.
        </p>
        <p>
          The theme of this year's Convention is <strong>"Engage"</strong> (Galatians 6:9-10). Our hope is that you will be motivated, encouraged and equipped to participate in the activity of the Kingdom as our almighty Lord has called and designed you to do. Connect with the Father, come alongside your brothers and sisters in Christ, and enjoy sweet fellowship in the Holy Spirit.
        </p>
        <p>
          Your map to adventure is found in this program. Come along for the journey. Our prayers are that you will be involved learners and leave this place as engaged followers of Jesus. Enjoy the journey!
        </p>
        <p><em>Your Convention Planning Committee</em></p>

        <div class="section-header">
          <h2>Information You Need To Know</h2>
        </div>

        <h4>Convention Registration</h4>
        <p>The GC Convention Registration Desk, located in the Calvin L. Rampton Salt Palace Convention Center Room 150A/B...</p>

        <h4>Business Session</h4>
        <p>Each registered member of the General Conference...</p>

        <h4>Nursery (Ages 3 and Under)</h4>
        <ul>
          <li>Please bring a diaper bag with needed items</li>
          <li>We’ll have you fill out an information sheet with a name tag</li>
          <li>Quiet corner with rocking chairs for nursing moms</li>
          <li>Scripture music and Bible activities led by Jenny Stephens and Lori Nienhuis</li>
          <li>English and Spanish speaking volunteers all week</li>
          <li>Please volunteer for one shift if you’re a mom or young woman willing to help</li>
        </ul>

        <h4>Children’s Program (Ages 4–11)</h4>
        <p>Located in Room 151G. Engaging activities allow parents to attend sessions...</p>

        <h4>Youth Program (Ages 12–High School)</h4>
        <p>Located in Room 355A/B/C (3rd floor). Get a name tag first...</p>

        <h4>Young Adult Program (Ages 18–25)</h4>
        <p>Located in Room 355D/E/F...</p>

        <h4>Pre-Purchased Convention Meals</h4>
        <p>Ministry meals: Room 254A/B. Sabbath meals: Room 250.</p>

        <h4>Translation Services</h4>
        <p>Provided for business sessions, evening and Sabbath services...</p>

        <h4>Ministry Exhibits</h4>
        <p>Located in Ballroom A/B/C/D. Women’s Bazaar supports Helping Hands Ministry in Jamaica.</p>

        <h4>Artios Christian College Graduation Rehearsal</h4>
        <p>Sabbath at 1:30 pm in Ballroom E/F/G/H/I/J. Be prompt.</p>

        <h4>Special Prayer</h4>
        <p>After evening services, meet to the right of the stage...</p>

        <h4>First Aid</h4>
        <p>Deborah Crayton (516-652-1581) and Crystal Beckman (605-351-4606) are your medical contacts.</p>

        <h4>Security</h4>
        <p>Tom Winchell (989-293-9626) is the security coordinator.</p>

        <h4>Worship Participants</h4>
        <p>If you're participating in services, meet behind the stage by 6:40 p.m.</p>

        <h4>Offerings</h4>
        <p>Evening offerings help support convention costs. Receipts available. Credit card gifts at the Registration Desk.</p>

        <h4>Behavior and Curfew</h4>
        <p>Parents are responsible for children. Shine for Jesus! Curfew for 17 and under is midnight unless with a tagged adult.</p>

        <h4>Hotel Damage</h4>
        <p>Any damage is the guest’s financial responsibility—not CoG7.</p>
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
/* 1. Global Light Mode Defaults */
html:not(.dark) ion-content.no-padding,
html:not(.dark) .banner-container,
html:not(.dark) .wave-divider,
html:not(.dark) .welcome-content,
html:not(.dark) ion-toolbar,
html:not(.dark) ion-title {
  background-color: #ffffff;
  color: #000000;
}

/* 2. Global Dark Mode Styling */
html.dark ion-content.no-padding,
html.dark .banner-container,
html.dark .wave-divider,
html.dark .welcome-content,
html.dark ion-toolbar,
html.dark ion-title {
  background-color: #2a2b2f;
  color: #ffffff;
}

/* 3. Fallback for systems using prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  ion-content.no-padding,
  .banner-container,
  .wave-divider,
  .welcome-content,
  ion-toolbar,
  ion-title {
    background-color: #2a2b2f;
    color: #ffffff;
  }
}

/* 4. Banner Container */
.banner-container {
  width: 100%;
  padding-top: 2rem;
}

/* 5. Banner Image */
.banner-image {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

/* 6. Wave Divider */
.wave-divider {
  width: 100%;
  height: 100px;
  line-height: 0;
  transform: rotate(180deg);
  margin-top: 0;
}

.wave-divider svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* 7. Main Welcome Content */
.welcome-content {
  padding: 1rem;
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  font-family: 'Proxima Nova Condensed', sans-serif;
  font-size: 16px;
}
/* <link rel="stylesheet" href="https://use.typekit.net/byo2bka.css"> */

/* 8. Responsive Text Padding */
@media (max-width: 600px) {
  .welcome-content {
    padding: 0.75rem;
  }
}

/* 9. Optional Cleanup */
ion-toolbar {
  box-shadow: none;
}

</style>
