<template>
    <div>
        <v-row class="fill-width" align="center">
            <v-img
                src="../../assets/lisa_field.jpg"
                class="mb-6"
                max-height="60vh"
                gradient="to bottom, rgba(78, 81, 102,0), rgba(78, 81, 102,0.8)"
            >
                <v-container class="fill-height">
                <v-col class="text-center white--text mb-2">
                    <h1> ABOUT </h1>
                </v-col>

                </v-container>
            </v-img>
        </v-row>
        <v-row class="mx-lg-12 mx-sm-2">
            <v-col cols="12">
                <p id="summary" class="text-center" style="font-family: Rocketto; font-size: 38pt">Lisa has been practicing Yoga for over {{ new Date().getFullYear() - 1994}} years, and initially began her practice as an outlet to deal with stress. However, Lisa quickly experienced that Yoga offered more as it opened her eyes to lifelong learning about the workings of the inner body and how it is subtleties affect mind/body balance.</p>
            </v-col>
        </v-row>
        <v-row class="mx-2">
            <v-card flat width="100%">
                <v-row>
                    <v-col
                    v-for="item in lisaPics"
                    :key="item.n"
                    class="d-flex child-flex"
                    cols="6"
                    sm="3"
                    >
                    <v-card flat tile class="d-flex">
                        <v-img
                        :src="item.src"
                        class="grey lighten-2"
                        aspect-ratio="0.8"
                        max-height="30vh"
                        >
                        <template v-slot:placeholder>
                            <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                            >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                        </v-img>
                    </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-row>
        <v-row class="d-flex mx-3 my-2">
            <v-col cols="12" sm="2">
                <h1 class="ma-auto">JOURNEY</h1>
            </v-col>
            <v-col cols="12" sm="10">
                <p>Lisa’s journey as a Yoga teacher began in 2007 as a way to encourage others to sense and feel a body connection they hadn't experienced before. Always interested in the importance of connective tissue, Lisa was drawn to study MELT method as a way to understand the healing properties of the body and to help her students feel their bodies in a brand new way. By sharing with her student’s how to tap into the wisdom of the body, Lisa’s classes help students reap many benefits by learning how to experience immediate freedom in their bodies, both in their yoga practice and daily activities.</p>
            </v-col>
        </v-row>
        <v-row class="d-flex mx-3 mt-2 mb-8">
            <v-col cols="12" sm="2">
                <h1 class="ma-auto">EXPERIENCE</h1>
            </v-col>
            <v-col cols="12" sm="10">
                <p>Along with Lisa’s 20 plus years of practical experience, she has extensive training and qualifications to support her inner body, alignment-based and yin teachings. Lisa is a Level 3 Critical Alignment Therapist; Saskatoon's only authorized Level 2 MELT Method instructor; and has studied Yin with Patricia Dewar, Sarah Powers and Bernie Clark. Lisa holds a Yoga Alliance certificate as a 200 hour Experienced Registered Yoga Teacher (200 HR ERYT™). Lisa has also embarked on Energy Medicine Yoga teacher training to add to her repertoire of qualifications. Lisa is influenced and motivated by: Patria Dewar; Todd Jackson, Sue Hinzmann; Mary-Lou Weprin; and Father Joe Perira.</p>
            </v-col>
        </v-row>
        <v-row class="d-flex mx-3 mt-2 mb-8">
            <v-col cols="12" sm="2">
                <h1 class="ma-auto">MISSION</h1>
            </v-col>
            <v-col cols="12" sm="10">
                <p>Lisa strives to share her passion and knowledge with her students, encouraging them to find lightness and freedom in their bodies, in an explorative way. Sharing MELT and Yoga, separately or in combination, brings whole-body benefits which is the heart of Lisa’s teaching.</p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lisaPics: [
                {n: 1, src: require('../../assets/lisa_tree.png')},
                {n: 2, src: require('../../assets/foot_melt.jpg')},
                {n: 3, src: require('../../assets/yoga2.jpg')},
                {n: 4, src: require('../../assets/class_hands.jpg')},
            ]
        }
    }
}
</script>

<style lang="stylus">
    #summary {
        line-height: 1.1;
    }
</style>
