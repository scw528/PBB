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
  apiKey: "AIzaSyCtCBTTEtKMROXWuWvaNhQO4puMDQzEpis",
  authDomain: "pbbyoga-2872f.firebaseapp.com",
  databaseURL: "https://pbbyoga-2872f.firebaseio.com",
  projectId: "pbbyoga-2872f",
  storageBucket: "pbbyoga-2872f.appspot.com",
  messagingSenderId: "237171080081",
  appId: "1:237171080081:web:28d340a79e276c70ccf830",
  measurementId: "G-K8WJ18CEMR"
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
