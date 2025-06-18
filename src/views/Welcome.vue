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

    <ion-content class="ion-padding welcome-page">

      <!-- Hero Card -->
      <ion-card class="hero-card">
        <ion-card-content>
          <img
            v-show="!isDarkMode"
            src="/assets/img/about/white.png"
            alt="Engage Utah 2025"
            class="hero-image"
          />
          <img
            v-show="isDarkMode"
            src="/assets/img/about/welcome4.png"
            alt="Engage Utah 2025 Dark"
            class="hero-image"
          />
        </ion-card-content>
      </ion-card>

      <!-- Special Thanks Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Welcome</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>
            Welcome to the 2025 Convention of the General Conference of the Church of God (Seventh Day) in beautiful Salt Lake City, Utah! Have you had an opportunity to savor the beauty of God’s creation all around us? Take time to enjoy the majestic mountains surrounding us and to visit some of the other natural vistas nearby. And be prepared for time with your brothers and sisters in the family of God. We have said it before and we will say it again – it is like a big family reunion. We hope you feel the warmth and love of your big family.
          </p>
          <p>
            This week, you will have many opportunities to experience life within the family. As with all families, change is inevitable. This week, some of those changes will be introduced – retiring personnel, new leaders, enhanced programs. Members have an opportunity to help select members to the Board of Directors, to attend workshops encouraging each of us to engage in the work of spreading the gospel of Jesus Christ. Classes for all ages, seminars, sermons – all prepared to encourage and expand our perspective and participation in impacting our world with the love of Jesus Christ.
          </p>
          <p>
            The theme of this year's Convention is "Engage" (Galatians 6:9-10). Our hope is that you will be motivated, encouraged and equipped to participate in the activity of the Kingdom as our almighty Lord has called and designed you to do. Connect with the Father, come alongside your brothers and sisters in Christ, and enjoy sweet fellowship in the Holy Spirit.
          </p>
          <p>
            Your map to adventure is found in this program. Come along for the journey. Our prayers are that you will be involved learners and leave this place as engaged followers of Jesus. Enjoy the journey!
          </p>
          <p>- Your Convention Planning Committee</p>
        </ion-card-content>
      </ion-card>

      <!-- Information You Need To Know Card -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Information You Need To Know</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Convention Registration.</strong> The GC Convention Registration Desk, located in the <strong> Calvin L. Rampton Salt Palace Convention Center Room 150A/B</strong>, will be open the following hours:</p>
          <ul>
            <li>Sunday: 3:00 pm - 9:00 pm</li>
            <li>Monday: 8:00 am - 5:00 pm</li>
            <li>Tuesday, Wednesday, Thursday: 8:00 - 9:00 am, 2:00 - 5:00 pm, 9:00 - 9:30 pm</li>
            <li>Friday: 8:00 - 9:00 am, 4:00 - 5:00 pm</li>
          </ul>
          <p><strong>Name tags</strong> must be worn by everyone attending all functions of the convention for security purposes. Your child must have a name tag to participate in the Children’s Program, and parents must have theirs to pick up their children. If you lose your name tag, please see the Registration Desk. Replacements will be provided for a small fee.</p>

          <p><strong>Business Session.</strong> Each registered member of the General Conference of the Church of God (Seventh Day) in the US and Canada who registered by May 29, 2025 is eligible to vote and will receive their voter’s packet allowing them to pick up a voting device at the start of each session. Members who did not register by this date are not able to vote in the business sessions for this convention.</p>

          <p><strong>A nursery</strong> for ages 3 and under, as well as mothers and infants, will be available during business sessions and workshops, Tuesday through Friday from 9 a.m. to 12 noon and 1:30 p.m. to 5:00 p.m. The nursery is located in <strong>Convention Center Room 151F (first floor)</strong>. There will be plenty of toys for active little ones. Please bring a diaper bag with things your child may need. Also, we will have you fill out an information sheet with a name tag. There will be a quiet corner with rocking chairs for nursing moms. In this area we also plan to have available Bible-based learning activities and interactive scripture music led by Jenny Stephens and Lori Nienhuis.There will be qualified volunteers throughout the week (English and Spanish speaking). If you are a mother with children of this age or know of a young woman who would like to help out, please volunteer for one shift during the week.</p>
          <p><strong>Children’s Program (Ages 4-11)</strong> will be located in <strong>Convention Center Room 151G</strong>. Engaging activities have been prepared for your children, which allow parents to participate fully in business sessions and workshops. This service also depends on your promptness in keeping the time schedule. We thank you in advance for your cooperation. ​​</p>
          <p><strong>Sabbath Morning Program -</strong>Parents, please bring your children to the designated area to line up with children’s staff for their performance by 9:15 Sabbath morning. Please be on time. Children will be dismissed back to this area after their performance and must be picked up promptly.</p>
          <p><strong>How you can assist:</strong></p>
          <ul>
            <li>Get your children to class on time.</li>
            <li>Pick them up promptly!</li>
            <li>So that we can provide the best experience for your child, please inform us of any food allergies, health limitations, or special needs that your child may have. Our staff desires to make this a positive, fun, educational and worshipful experience for children. Your assistance is appreciated.</li>
          </ul>
          <p><strong>The Youth Program</strong></p>
          <p><strong>Young Adult Program (Ages 18-25)</strong> will be located in <strong>Convention Center Room 355D/E/F (3rd floor)</strong>. After you register at the Registration Desk and have your name tag, come see us at the Young Adult Registration table outside the Young Adult room for a detailed schedule.</p>
          <p><strong>Pre-Purchased Convention Meals.</strong> Special ministry meals will be served in <strong>Convention Center Room 254A/B (2nd Floor)</strong>. Sabbath meals will be served in <strong>Convention Center Room 250 (2nd Floor)</strong>.</p>
          <p><strong>Translation equipment and services</strong> will be provided for business sessions, evening services, Sabbath services, and some workshops. Several workshops will be offered in both English and Spanish at different times. Check the workshop schedule to identify workshops offered in English, Spanish, or with translation. </p>
          <p><strong>Ministry exhibits.</strong> Please visit the various ministry exhibits located in <strong>Convention Center Ballroom A/B/C/D</strong>. The Women’s Bazaar will be raising funds for the Helping Hands Ministry, which feeds and helps the homeless in Jamaica.</p>

          <p><strong>Artios Christian College graduation rehearsal</strong> will be held on Sabbath afternoon at 1:30 in the <strong>Convention Center Ballroom E/F/G/H/I/J</strong>. Please be prompt.</p>

          <p><strong>Special Prayer.</strong> Attendees desiring special prayer may meet to the right side of the stage immediately following evening services. Pastor Tim Hinds and team will be available to pray with you and for you. If you have a need for special prayer at other times, please call Pastor Tim at 918-557-0813.</p>

          <p><strong>First Aid Coordinators.</strong> During the convention, Deborah Crayton and Crystal Beckman are serving as our primary medical contacts.  They will be working with Convention Center staff and hotel staff, as well as CoG7 members. Deborah may be contacted at 516-652-1581 and Crystal may be contacted at 605-351-4606.</p>

          <p><strong>Security Coordinator.</strong> During the convention, Tom Winchell is serving as our primary security contact. Tom may be contacted at 989-293-9626.</p>

          <p><strong>Worship service participants.</strong>  If you’re involved in the evening or Sabbath services (special music, worship team, speaker, presenter, etc.), please meet behind the stage by 6:40 p.m. </p>

          <p><strong>Offerings.</strong> Each year, effort is made to keep individual registration costs down. Therefore, offerings are a critical part of the convention budget. Each evening you will have the opportunity to worship with your offerings to support the convention costs. If you contribute by check, a receipt will be mailed to the address listed on the check. If you use cash and would like a receipt or would like to give by credit card, please give those offerings at the Registration Desk.</p>

          <p><strong>Behavior.</strong> Parents are responsible for their children, and any minors included on their registration form, at all times. Convention attendees’ conduct is a powerful witness of our church and our relationship with Jesus Christ. Let’s shine for Jesus this week. </p>

          <p><strong>Curfew.</strong> The curfew for those 17 and under is midnight, unless an adult family member wearing a convention name tag accompanies them. We must vacate the Convention Center prior to midnight each evening.</p>

          <p><strong>Hotel damage.</strong> Any damage to the hotel or Convention Center properties is not the responsibility of the Church of God (Seventh Day). Guests who cause damage will be responsible for directly reimbursing the hotel and/or Convention Center.</p>
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
  IonMenuButton,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue';
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);

onMounted(() => {
  const updateDarkMode = () => {
    isDarkMode.value = document.body.classList.contains('dark');
  };
  updateDarkMode();

  const observer = new MutationObserver(() => updateDarkMode());
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});
</script>

<style scoped>
/* Hero Card */
.hero-card {
  background-color: #2f2f2f;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.hero-card ion-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 2rem;
}

.hero-image {
  width: 80%;
  max-width: 500px;
  height: auto;
}

/* Welcome Page Styles */
.welcome-page p {
  margin-bottom: 1rem;
}

.welcome-page ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.welcome-page li {
  margin-bottom: 0.5rem;
}

/* Fix header title color in light and dark mode */
.welcome-page ion-card-header ion-card-title {
  color: var(--ion-text-color, #000);
}

html.dark .welcome-page ion-card-header ion-card-title {
  color: var(--ion-color-primary-contrast, #fff);
}
</style>
