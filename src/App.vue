<template>
  <v-app id="app" style="background: white">
    <v-navigation-drawer
      class="fill-height"
      v-model="drawer"
      temporary
      app
      height="100vh"
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

    <v-row full-width contain align-content="center" class="mb-1">
        <v-img src="./assets/pbb_appbar.png" style="height: inherit"></v-img>
        <v-img contain src="./assets/logo_tagline.png" height="12vh" class="mt-n10 mb-2"></v-img>
    </v-row>
    <v-divider></v-divider>
    <v-toolbar
      flat
      dense
    >
      <v-toolbar-items class="mx-auto">
        <v-btn
          width="14vw"
          text
          v-for="item in menuItems"
          :key="item.title"
          v-bind:to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>


    <!-- <v-app-bar flat app extended>
      
      <v-app-bar-nav-icon class="mt-12 hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-container class="pt-0" style="height: inherit">
        
          <v-row class="mx-5" align="center" justify="center" style="height: inherit">
            
            <v-col class="my-auto" lg="3" md="4" sm="7" >
              <v-img
                class="mx-auto"
                src="./assets/logo_simply.png"
                height="70%"
                contain
              >
              </v-img>
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col md="auto" class="my-auto hidden-sm-and-down">
              <v-btn
                text
                v-for="item in menuItems"
                :key="item.title"
                v-bind:to="item.link"
              >
                {{ item.title }}
              </v-btn>
            </v-col>
        </v-row>
      </v-container>
    </v-app-bar> -->
     
    <v-content>
        <router-view/>
    </v-content>

    <v-footer
      app
      dark
      padless
      width="100%"
      absolute
    >
    <v-card
      flat
      tile
      class="flex white--text text-center"
      color="#0e7e8f"
    >

      <v-card-text class="white--text my-auto">
        <strong>Get in touch!</strong>
        <p class="pb-0 mb-0">
          Call/Text: (306)-220-7664
          <br>
          Email: lisaanneleis@hotmail.com
        </p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text py-2">
        <v-row>
          <v-col class="">
            {{ new Date().getFullYear() }} — <strong>Pure Body Balance</strong>         
          </v-col>
          <v-col align-self="center">
            <v-btn
              v-for="icon in footer"
              :key="icon.title"
              class="mx-3"
              dark
              icon
              router
              v-bind:to="icon.link"
            >
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn v-if="!userIsAuthenticated" text icon>
              <router-link to="/login">
                <v-icon color="white">person</v-icon>
              </router-link>
            </v-btn>
            <v-btn v-if="userIsAuthenticated" color="primary" dark class="ma-2" @click="signOut()"> Sign Out </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-footer>
      
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
