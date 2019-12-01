<template>
  <v-card class="mx-auto" flat>

    <v-spacer></v-spacer>

    <v-card-title primary-title class="justify-center">ADMIN LOGIN</v-card-title>
    
      <v-form v-model="valid">
        <v-container>
          <v-col>
            <v-row
              cols="8"
              md="4"
              class="ma-auto"
            >
              <v-text-field
                name="email"
                label="Email"
                id="email"
                v-model="email"
                :rules="emailRules"
                required
              ></v-text-field>
            </v-row>

            <v-row
              xs12 sm5
              class="ma-auto"
            >
              <v-text-field
                name="password"
                label="Password"
                id="password"
                v-model="password"
                type="password"
                required
              ></v-text-field>
            </v-row>

            <v-row xs12 sm5>
              <v-btn
                block
                :disabled="!valid"
                color="#167f8b"
                @click="onSignin"
              >
                Validate
              </v-btn>
            </v-row>
            

          </v-col>
      </v-container>
      </v-form>
      <v-row v-if="this.error">
              <v-flex xs12 sm5 class="mx-auto">
                <app-alert @dismissed="onDismissed" ></app-alert>
              </v-flex>

            </v-row>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        valid: false,
        email: '',
        password: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
      }
    },
    computed: {
      user() {
        return this.$store.getters.user
      },
      error() {
        return this.$store.getters.error
      }

    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/calendar')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onDismissed () {
        // eslint-disable-next-line no-console
        console.log("dismissed alert")
        this.$store.dispatch('clearError')
      }
    }
  }
</script>