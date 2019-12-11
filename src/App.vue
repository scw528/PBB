<template>
  <v-app id="app" style="background: white">
    <v-navigation-drawer
      height="100%"
      width="45%"
      v-model="drawer"
      temporary
      app
    >
      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          router
          v-bind:to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-layout wrap row>
      <v-flex xs12>
        <v-img contain src="./assets/pbb_appbar.png"></v-img>
      </v-flex>
      
      <v-flex xs2 class="hidden-sm-and-up text-center">
        <v-btn icon class="my-4" @click="drawer = !drawer"><v-icon>menu</v-icon></v-btn>
      </v-flex>

      <v-flex xs9 md12 lg12>
        <v-img contain src="./assets/logo_simply.png" max-height="10vh" class="mt-lg-n10 mt-md-n8 mb-2"></v-img>
      </v-flex>
      
    </v-layout>

    <v-divider v-if="$vuetify.breakpoint.smAndUp"></v-divider>

    <v-toolbar
      v-if="$vuetify.breakpoint.smAndUp"
      flat
      dense
    >
      <v-toolbar-items class="mx-auto">
        <v-btn
          width="8vw"
          text
          v-for="item in menuItems"
          :key="item.title"
          v-bind:to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-divider></v-divider>
     
    <v-content>
        <router-view/>
    </v-content>

    <v-layout wrap row class="mt-3">
      <v-flex xs12>
        <v-img max-height="18vh" src="./assets/flipped_ban.png">
          <v-container fill-height fill-width class="d-flex align-end pb-0">
            <v-divider></v-divider>
            <v-row align-lg="center" align-sm="center" justify-sm="center">
              <v-col :lg="4" v-if="$vuetify.breakpoint.smAndUp" class="text-center" align-self="center">
                <p class="ma-2" style="color: #352344"><strong>Pure Body Balance</strong> - Saskatoon, SK.</p>    
              </v-col>
              <v-col :lg="4" :sm="6" class="text-center" align-self="center">
                <v-btn
                  v-for="icon in footer"
                  :key="icon.title"
                  class="mx-2"
                  color="#352344"
                  icon
                  router
                  v-bind:to="icon.link"
                >
                  <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
              </v-col>
              <v-col :lg="4" :md="4" :sm="6" class="text-center" align-self="center">
                <v-btn v-if="!userIsAuthenticated" icon>
                  <router-link to="/login">
                    <v-icon color="#352344">person</v-icon>
                  </router-link>
                </v-btn>
                <v-btn v-if="userIsAuthenticated" color="#352344" dark class="ma-2" @click="signOut()"> Sign Out </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-flex>
    </v-layout>

      
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
export default {
    data () {
      return {
        drawer: null,
        menuItems: [
          { title: 'Home', icon: 'dashboard', link: '/' },
          { title: 'About', icon: 'person', link: '/about' },
          { title: 'Classes', icon: 'calendar_today', link: '/calendar' },
          { title: 'Melt', icon: 'airline_seat_flat', link: '/melt' },
          { title: 'Yoga', icon: 'accessibility_new', link: '/yoga' },
          { title: 'Workshops', icon: 'group', link: '/workshops' },
          { title: 'Shop', icon: 'shopping_cart', link: '/shop' },
          
        ],
        footer: [
          {icon: 'mdi-facebook', link: '/facebook'} ,
          {icon: 'mdi-instagram', link: '/instagram'}
        ],
      }
    },
    computed: {
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
      }
    }
  }
</script>

<style>
  @import "./scss/styles.scss";

  #app {
    font-family: "Aqua";
  }

</style>
