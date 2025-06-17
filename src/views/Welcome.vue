<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button class="menu-button"></ion-menu-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="no-padding">
      <!-- Hero Image Section -->
      <div class="banner-container">
        <img
          v-show="!isDarkMode"
          src="/assets/img/about/white.png"
          alt="Engage Utah 2025"
          class="banner-image"
        />
        <img
          v-show="isDarkMode"
          src="/assets/img/about/welcome4.png"
          alt="Engage Utah 2025 Dark"
          class="banner-image"
        />

      </div>

      <!-- Wavy Divider -->
      <div class="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z" fill="#f7941d" />
        </svg>
      </div>

      <!-- Welcome Message -->
      <div class="welcome-content">
        <div class="section-header">
          <h2>Welcome</h2>
        </div>
        <p>Welcome to the 2025 Convention of the General Conference of the Church of God (Seventh Day) in beautiful Salt Lake City, Utah! Have you had an opportunity to savor the beauty of God’s creation all around us? Take time to enjoy the majestic mountains surrounding us and to visit some of the other natural vistas nearby. And be prepared for time with your brothers and sisters in the family of God. We have said it before and we will say it again – it is like a big family reunion. We hope you feel the warmth and love of your big family.</p>
        <p>This week, you will have many opportunities to experience life within the family. As with all families, change is inevitable. This week, some of those changes will be introduced – retiring personnel, new leaders, enhanced programs. Members have an opportunity to help select members to the Board of Directors, to attend workshops encouraging each of us to engage in the work of spreading the gospel of Jesus Christ. Classes for all ages, seminars, sermons – all prepared to encourage and expand our perspective and participation in impacting our world with the love of Jesus Christ.</p>
        <p>The theme of this year's Convention is <strong>"Engage"</strong> (Galatians 6:9-10). Our hope is that you will be motivated, encouraged and equipped to participate in the activity of the Kingdom as our almighty Lord has called and designed you to do. Connect with the Father, come alongside your brothers and sisters in Christ, and enjoy sweet fellowship in the Holy Spirit.</p>
        <p>Your map to adventure is found in this program. Come along for the journey. Our prayers are that you will be involved learners and leave this place as engaged followers of Jesus. Enjoy the journey!</p>
        <p><em>Your Convention Planning Committee</em></p>

        <div class="section-header">
          <h2>Information You Need To Know</h2>
        </div>

        <h4>Convention Registration</h4>
        <p>The GC Convention Registration Desk, located in the Calvin L. Rampton Salt Palace Convention Center Room 150A/B, will be open the following hours: Sunday 3:00 pm - 9:00 pm; Monday 8:00 am - 5:00 pm; Tuesday, Wednesday, Thursday 8:00 - 9:00 am, 2:00 - 5:00 pm, 9:00 - 9:30 pm; Friday 8:00 - 9:00 am, 4:00 - 5:00 pm. Name tags must be worn by everyone attending all functions of the convention for security purposes. Your child must have a name tag to participate in the Children’s Program, and parents must have theirs to pick up their children. If you lose your name tag, please see the Registration Desk. Replacements will be provided for a small fee.</p>

        <h4>Business Session</h4>
        <p>Each registered member of the General Conference of the Church of God (Seventh Day) in the US and Canada who registered by May 29, 2025 is eligible to vote and will receive their voter’s packet allowing them to pick up a voting device at the start of each session. Members who did not register by this date are not able to vote in the business sessions for this convention.</p>

        <h4>Nursery (Ages 3 and Under)</h4>
        <p>A nursery for ages 3 and under, as well as mothers and infants, will be available during business sessions and workshops, Tuesday through Friday from 9 a.m. to 12 noon and 1:30 p.m. to 5:00 p.m. The nursery is located in Convention Center Room 151F (first floor).</p>
        <ul>
          <li>Plenty of toys for active little ones</li>
          <li>Bring a diaper bag with needed items</li>
          <li>Information sheet with name tag</li>
          <li>Quiet corner with rocking chairs for nursing moms</li>
          <li>Scripture music and Bible activities led by Jenny Stephens and Lori Nienhuis</li>
          <li>Qualified English and Spanish speaking volunteers</li>
          <li>Volunteer for one shift if you can help</li>
        </ul>

        <h4>Children’s Program (Ages 4–11)</h4>
        <p>Located in Convention Center Room 151G. Engaging activities have been prepared for your children. Sabbath Morning Program - Parents, please bring your children to the designated area to line up with children’s staff for their performance by 9:15 Sabbath morning. Children will be dismissed back to this area after their performance and must be picked up promptly.</p>
        <p><strong>How you can assist:</strong></p>
        <ul>
          <li>Get your children to class on time</li>
          <li>Pick them up promptly</li>
          <li>Inform staff of any allergies or special needs</li>
        </ul>

        <h4>Youth Program (Ages 12–High School)</h4>
        <p>Located in Convention Center Room 355A/B/C (3rd floor). Get a name tag first, then visit the Youth Registration table for your detailed schedule. The Youth Program App will have the complete schedule. Parents and Youth can download the App at the registration table. Printed copies available if needed.</p>

        <h4>Young Adult Program (Ages 18–25)</h4>
        <p>Located in Convention Center Room 355D/E/F. After registering and getting a name tag, check in at the Young Adult Registration table.</p>

        <h4>Pre-Purchased Convention Meals</h4>
        <p>Ministry meals: Room 254A/B. Sabbath meals: Room 250.</p>

        <h4>Translation Services</h4>
        <p>Translation equipment and services provided for business sessions, evening/Sabbath services, and some workshops. Some workshops are bilingual. See schedule.</p>

        <h4>Ministry Exhibits</h4>
        <p>Located in Ballroom A/B/C/D. The Women’s Bazaar supports Helping Hands Ministry in Jamaica.</p>

        <h4>Artios Christian College Graduation Rehearsal</h4>
        <p>Sabbath at 1:30 p.m. in Ballroom E/F/G/H/I/J. Be prompt.</p>

        <h4>Special Prayer</h4>
        <p>Meet to the right of the stage after evening services. For other needs, call Pastor Tim Hinds at 918-557-0813.</p>

        <h4>First Aid</h4>
        <p>Deborah Crayton (516-652-1581) and Crystal Beckman (605-351-4606) are the medical contacts.</p>

        <h4>Security</h4>
        <p>Tom Winchell (989-293-9626) is the security coordinator.</p>

        <h4>Worship Participants</h4>
        <p>If you're involved in services, meet behind the stage by 6:40 p.m.</p>

        <h4>Offerings</h4>
        <p>Offerings help support the convention. Give via check (receipt mailed), cash (ask for receipt), or credit card (at Registration Desk).</p>

        <h4>Behavior and Curfew</h4>
        <p>Parents are responsible for their children. Curfew for ages 17 and under is midnight unless with an adult wearing a name tag. Convention Center must be vacated before midnight.</p>

        <h4>Hotel Damage</h4>
        <p>Any damage to the hotel or Convention Center properties is not the responsibility of the Church of God (Seventh Day). Guests who cause damage will be responsible for directly reimbursing the hotel and/or Convention Center.</p>
        
        <!-- Add spacing to prevent content from being cut off -->
        <div style="height: 3rem;"></div>

      </div>
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
  IonButton
} from '@ionic/vue';
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

onMounted(() => {
  const updateDarkMode = () => {
    isDarkMode.value = document.body.classList.contains('dark');
  };

  // Initial check
  updateDarkMode();

  // Optional: Observe changes in body class
  const observer = new MutationObserver(() => updateDarkMode());
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});
</script>




<style scoped>


/* Header colors for light and dark mode */
.header-toolbar {
  --background: #ffffff;
  --color: #000000;
}

html.dark .header-toolbar {
  --background: #2a2b2f;
  --color: #ffffff;
}

/* Top image */
.banner-container {
  width: 100%;
  padding-top: 1.5rem;
  background-color: transparent;
}
.banner-image {
  width: 100%;
  height: auto;
  max-height: 320px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

/* Wave style */
.wave-divider {
  width: 100%;
  height: 100px;
  line-height: 0;
  margin-bottom: -5px;
}
.wave-divider svg {
  display: block;
  width: 100%;
  height: 100%;
}

.welcome-content {
  background-color: #f7941d;
  padding: 1.5rem;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
}


.welcome-content h2,
.welcome-content h4 {
  color: #ffffff;
  font-weight: bold;
}

.welcome-content p,
.welcome-content li {
  color: #ffffff;
  font-weight: normal;  
}




.welcome-content ul {
  padding-left: 1.25rem;
}

/* Responsive */
@media (max-width: 600px) {
  .welcome-content {
    padding: 1rem;
    font-size: 0.95rem;
  }
}
</style>
