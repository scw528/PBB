import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { store } from './store'
import VueTextAreaAutosize from 'vue-textarea-autosize';
import * as firebase from 'firebase';
import router from '@/router';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Alert from './components/Shared/alert'

Vue.use(VueTextAreaAutosize);
Vue.use(vuetify);

Vue.component('app-alert', Alert)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
});

export const db = firebase.firestore();

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  //created() {
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.$store.dispatch('autoLogin', user);
    //   }
    // });
  //},
}).$mount('#app')
