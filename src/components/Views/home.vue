<template>
  <div>
    <v-layout row wrap class="fill-width" align="center">
      <v-flex xs12 md12 lg12>
        <v-img
          :aspect-ratio="16/9"
          src="../../assets/lisa_melt.jpg"
          max-height="700px"
          min-height="500px"
          gradient="to right, rgba(78, 81, 102,0), rgba(78, 81, 102,0.4)"
        >
          <!-- <v-container class="fill-height fill-width pa-0">
            <v-flex xs6 md6 lg6 class="d-flex ma-auto">
                <h1 class="d-flex ma-auto">Living Life Fully • Active & Pain Free</h1>
                <v-btn outlined class="d-flex ma-auto" color="white">Join Newsletter</v-btn>
            </v-flex>
          </v-container> -->
          <v-container class="fill-height pa-0 mr-0"> 
            <v-row>
              <v-col cols="11">
                <v-row justify-lg="end" justify-sm="center" class="ma-sm-auto">
                  <h1 class="d-flex" style="font-family: Rocketto; font-size: 46pt"> Living Life Fully • Active & Pain Free</h1>
                </v-row>
                <v-row justify="end">
                  <v-btn outlined class="d-flex" color="#352344">Join Newsletter</v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-sheet color="white" height="100px">
          <v-container class="fill-height fill-width py-0">
              <h2 class="d-flex text-center ma-auto" style="color: #352344">FEEL BETTER LIVING IN YOUR BODY</h2>
          </v-container>
        </v-sheet>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mx-4">
      <v-flex xs12 md4 lg4
        v-for="item in cards"
        :key="item.title"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" tile class="mx-2 mb-4" router v-bind:to="item.link">
            <v-img :src="item.src" :aspect-ratio="16/9">
              <v-container class="fill-height">
                <v-row justify="center" align="center" class="text-center">
                  <v-sheet tile class="ma-auto" height="15%" width="90%" color="rgba(255, 255, 255, 0.75)">
                      <v-container class="fill-height">
                        <v-row>
                          <v-col>
                            <v-row justify="center" align="start">
                              <h3 class="my-2" style="font-family: Rocketto; font-size: 28pt">{{ item.description }}</h3>
                            </v-row>
                            <v-row justify="center" align="end">
                              <h2 class="my-2" style="font-size: 32px">{{item.title}}</h2>
                            </v-row>
                          </v-col>
                        </v-row>
                      </v-container>
                  </v-sheet>
                </v-row>
              </v-container>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {title: "YOGA", description: "Sharing the wisdom of the practice.", src: require('../../assets/YOGA3.png'), link: '/yoga'},
        {title: 'MELT', description: "Essential to any wellness or fitness routine.", src: require('../../assets/melt2.jpg'), link: '/melt'},
        {title: 'WORKSHOPS', description: "Learn, inspire and advance your self-care.", src: require('../../assets/workshop.png'), link: '/workshops'},
      ]
    }
  }
}
</script>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.9;
  }

  h2 {
      letter-spacing: 3px;
      color: #0e7e8f
  }

  h1 {
    color: #ffffff
  }


</style>
