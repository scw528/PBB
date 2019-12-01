import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Views/home.vue';
import Calendar from './components/Classes/calendar';
import Melt from './components/Views/melt.vue';
import Yoga from './components/Views/yoga.vue';
import Workshops from './components/Views/workshops.vue'
import Shop from './components/Views/shop.vue';
import Resources from './components/Views/resources.vue'
import CreateClass from './components/Classes/createClass.vue'
import authGuard from './auth-guard';
import Login from './components/Admin/login.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/createClass',
      name: 'createClass',
      component: CreateClass,
      beforeEnter: authGuard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/melt',
      name: 'melt',
      component: Melt,
    },
    {
      path: '/yoga',
      name: 'yoga',
      component: Yoga,
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: Workshops
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources,
    },
    {
      path: '/facebook',
      beforeEnter() {
        window.location = 'https://www.facebook.com/';
      },
    },
    {
      path: '/instagram',
      beforeEnter() {
        window.location = 'https://www.instagram.com/lisa.leis.39/';
      },
    },
  ],
  mode: 'history',
});
