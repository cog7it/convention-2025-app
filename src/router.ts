import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import store from './store';
import { IonicVue } from '@ionic/vue';
import { App } from 'vue';

const privateRoute: RouteRecordRaw['beforeEnter'] = function(to, from, next) {
  if (!store.state.user.isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
};

const ensureSessionData: RouteRecordRaw['beforeEnter'] = async function(to, from, next) {
  if (store.state.sessions.sessions.length === 0) {
    await store.dispatch("loadSessionData");
  }
  next();
};

const ensureSpeakerData: RouteRecordRaw['beforeEnter'] = async function(to, from, next) {
  if (store.state.speakers.speakers.length === 0) {
    await store.dispatch("loadSpeakerData");
  }
  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tutorial',
    name: 'tutorial',
    component: () => import('@/views/Tutorial.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/Account.vue'),
    beforeEnter: privateRoute
  },
  {
    path: '/support',
    name: 'support',
    component: () => import('@/views/Support.vue')
  },
  /*
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/Signup.vue')
  },
  */
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: () => import('@/views/Tutorial.vue')
  },
  {
    path: '/tabs',
    component: () => import('@/views/Tabs.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/welcome'
      },      
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('@/views/Welcome.vue')
      },      

      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('@/views/SessionList.vue')
      },
      {
        name: 'session-detail',
        path: 'schedule/session/:sessionId',
        component: () => import('@/views/SessionDetail.vue'),
        beforeEnter: ensureSessionData
      },
      {
        path: 'speakers',
        name: 'speakers',
        component: () => import('@/views/SpeakerList.vue')
      },
      {
        path: 'speakers/speaker/:speakerId',
        name: 'speaker-detail',
        component: () => import('@/views/SpeakerDetail.vue'),
        beforeEnter: ensureSpeakerData
      },
      {
        path: 'speakers/session/:sessionId',
        name: 'speaker-session-detail',
        component: () => import('@/views/SessionDetail.vue'),
        beforeEnter: ensureSessionData
      },
      {
        path: 'map',
        name: 'map',
        component: () => import('@/views/Map.vue')
      },
      {
        path: 'local-attractions',
        name: 'local-attractions',
        component: () => import('@/views/Local-Attractions.vue')
      },   
      {
        path: 'places-to-eat',
        name: 'places-to-eat',
        component: () => import('@/views/PlacesToEat.vue')
      },
      {
        path: 'attractions/:attractionId',
        name: 'attraction-detail',
        component: () => import('@/views/AttractionDetail.vue')
      },                  
         
      {
        path: 'business',
        name: 'business',
        component: () => import('@/views/Business.vue')
      },
      {
        path: '/nominee/:nomineeId',
        name: 'nominee-detail',
        component: () => import('@/views/NomineeDetail.vue')
      },   
      {
        path: '/tabs/special-thanks',
        component: () => import('@/views/SpecialThanks.vue')
      },         
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import('@/views/Feedback.vue')
      }      
    ]
  },
  {
    path: '/',
    redirect: '/tabs/welcome'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/tabs/welcome'
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== to.path.toLowerCase()) {
    next({ path: to.path.toLowerCase(), replace: true })
  } else {
    next()
  }
});

export function configureRouter(app: App) {
  app.use(router);
  app.use(IonicVue, {
    maxPageCacheSize: 10
  });
  return router;
}

export default router;
