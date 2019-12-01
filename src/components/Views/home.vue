<template>
  <div>
    <v-row class="fill-width" align="center">
      <v-img
        :aspect-ratio="16/9"
        src="../../assets/PBB_Banner.png"
        height="700px"
        class="mb-6"
      >
        <v-container class="fill-height">
          <v-col class="text-center mb-2">
            <h1>LIVING LIFE FULLY • ACTIVE • PAIN FREE </h1>
          </v-col>

        </v-container>
      </v-img>
    </v-row>
  
    <v-row class="fill-height mt-4 mx-auto" align="center">
      <v-col class="mx-auto" :lg="7" :sm="12">
        <h2 class="text-center my-3">ABOUT LISA</h2>
        <p class="text-left">Lisa has been practicing Yoga since 1994, and initially began her practice as an outlet to deal with stress. However, Lisa quickly experienced that Yoga offered more as it opened her eyes to lifelong learning about the workings of the inner body and how it's subtleties affect mind/body balance. 
                            <br>
                            <br>
                            Lisa’s journey as a Yoga teacher began in 2007 as a way to encourage others to sense and feel a body connection they hadn't experienced before. Always interested in the importance of connective tissue, Lisa was drawn to study MELT method as a way to understand the healing properties of the body and to help her students feel their bodies in a brand new way. By sharing with her student’s how to tap into the wisdom of the body, Lisa’s classes help students reap many benefits by learning how to experience immediate freedom in their bodies, both in their yoga practice and daily activities.
                            <br>
                            <br>
                            Along with Lisa’s 20 plus years of practical experience, she has extensive training and qualifications to support her inner body, alignment-based and yin teachings. Lisa is a Level 3 Critical Alignment Therapist; Saskatoon's only authorized Level 2 MELT Method instructor; and has studied Yin with Patricia Dewar, Sarah Powers and Bernie Clark. Lisa holds a Yoga Alliance certificate as a 200 hour Experienced Registered Yoga Teacher (200 HR ERYT™). Lisa has also embarked on Energy Medicine Yoga teacher training to add to her repertoire of qualifications. Lisa is influenced and motivated by: Patria Dewar; Todd Jackson, Sue Hinzmann; Mary-Lou Weprin; and Father Joe Perira. 
                            <br>
                            <br>
                            Lisa strives to share her passion and knowledge with her students, encouraging them to find lightness and freedom in their bodies, in an explorative way. Sharing MELT and Yoga, separately or in combination, brings whole-body benefits which is the heart of Lisa’s teaching.</p>
      </v-col>

      <v-col class="mx-auto" :lg="5" :sm="12">
        <template>
          <v-col>
            <v-hover>
              <v-card>
                <v-img src="../../assets/lisa.jpg" height="500px"></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="fill-height my-3 mx-auto" align="center">

      <v-col class="mx-auto" :lg="5" :sm="12">
        <template>
          <v-col>
            <v-hover>
              <v-card>
                <v-img src="../../assets/yoga.jpg" height="500px"></v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-col>

      <v-col class="mx-auto" :lg="7" :sm="12">
        <h2 class="text-center">YOGA</h2>
        <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="fill-height my-3 mx-auto" align="center">
      <v-col :lg="7" :sm="12">
        <h2 color="#536271" class="text-center">MELT</h2>
        <p class="text-left">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT ANIM ID EST LABORUM.</p>
      </v-col>

      <v-col class="mx-auto mb-5" :lg="5" :sm="12">
        <template>
          <v-col>
              <v-card>
                <v-img src="../../assets/melt.jpg" height="500px"></v-img>
              </v-card>
          </v-col>
        </template>
      </v-col>
    </v-row>

    <!-- <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center">
      <template v-for="(item, i) in cards">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.src"
                height="225px"
                gradient="to top right, rgba(100,115,150,.33), rgba(25,32,50,.7)"
              >
                <v-card-title class="white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="start"
                  >
                    <h4 class="mt-4 text-left">{{ item.title }}</h4>
                    <br>

                    <div>
                      <p class="caption font-weight-bold font-italic text-left">
                        {{ item.text }}
                      </p>
                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container> -->


  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {title: "YOGA", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: require('../../assets/yoga.jpg'), link: '/yoga'},
        {title: 'MELT', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: require('../../assets/melt.jpg'), link: '/melt'},
        {title: 'WORKSHOPS', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", src: require('../../assets/workshop.jpg'), link: '/workshops'},
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
    opacity: 0.85;
  }

  h1 {
        font-size: 34pt;
        color: white;
        letter-spacing: 3px;
  }

  h2 {
    color: #6761A8
  }


</style>
