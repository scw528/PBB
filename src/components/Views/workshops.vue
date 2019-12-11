<template>
    <div>
        <v-row class="fill-width" align="center">
            <v-img
                :aspect-ratio="16/9"
                src="../../assets/workshop.png"
                height="500px"
                class="mb-6"
            >
                <v-container class="fill-height">
                <v-col class="text-center white--text mb-2">
                    <h1> WORKSHOPS </h1>
                </v-col>

                </v-container>
            </v-img>
        </v-row>

        <v-row class="mx-2 my-6">
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </v-row>

        <v-divider></v-divider>

        <v-row v-if="workshops.length > 0" justify="center" align="center" class="mt-6">
            <h1>UPCOMING WORKSHOPS</h1>
        </v-row>

        <v-row class="mx-auto mt-2 mb-6" justify="center" align="center">
            <template v-for="(item, i) in sortedWorkshops">
                <v-col v-if="item.start.substr(0,10) > today" :key="i" :lg="3" :md="6" :sm="12">
                    <!-- <v-skeleton-loader type="card"> -->
                        <v-card :key="i">
                            <v-img :src="item.src" height="300" contain></v-img>
                            <v-card-title>{{ item.name }}</v-card-title>
                            <v-card-subtitle>{{ new Date(item.start).toDateString().substr(0, 15) }}  {{ item.timeRange }}</v-card-subtitle>
                            <v-card-text class="text--primary">
                                <div> {{item.className}} </div>

                                <div>{{ item.details }}</div>
                            </v-card-text>
                        </v-card>
                    <!-- </v-skeleton-loader> -->
                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script>
import * as firebase from 'firebase'

export default {
    data: () => ({
        today: new Date().toISOString().substr(0, 10),
        workshops: [],
        imgURLs: [],
        name: null,
        className: null,
        details: null,
        location: null,
        start: null,
        end: null,
        timeRange: null,
        color: "#0e7e8f",
    }),
    mounted () {
        this.getURLs()
    },
    computed: {
        sortedWorkshops: function() {
            return this.workshops.slice().sort((a, b) => new Date(a.start) - new Date(b.start))
        }
    },
    methods: {
        getURLs() {
            var workshops = []

            // get all ids for MELT Workshops
            firebase.firestore().collection('classes').where("name", "==", "Melt Workshop").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let id = doc.id
                    let appData = doc.data()
                    appData.id = doc.id
                    // add the image url to src under workshops
                    firebase.storage().ref('workshops/' + id).getDownloadURL().then(function(url) {
                        // appData.src = url
                        // imgURLs.push(url);
                        firebase.firestore().collection('classes').doc(id).update({
                            src: url
                        })
                    })  
                    workshops.push(appData)
                });
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log('Error getting documents', err);
            });

            // get all ids for YOGA workshops
            firebase.firestore().collection('classes').where("name", "==", "Yoga Workshop").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let id = doc.id
                    let appData = doc.data()
                    appData.id = doc.id
                    // add the image url to src under workshops
                    firebase.storage().ref('workshops/' + id).getDownloadURL().then(function(url) {
                        // appData.src = url
                        // imgURLs.push(url);
                        firebase.firestore().collection('classes').doc(id).update({
                            src: url
                        })
                    })  
                    workshops.push(appData)              
                });
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log('Error getting documents', err);
            });

            this.workshops = workshops
            
        },
    }
}
</script>