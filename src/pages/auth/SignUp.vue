<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>Sign Up</h2>
          <p>Sign up for an account.</p>
          <b-form @submit.prevent="signUp">
            <b-form-group
              label="Username:"
              label-for="usernameInput">
              <b-form-input 
                id="usernameInput"
                type="text"
                v-model="username"
                required
                placeholder="Enter username"/>
            </b-form-group>
            <b-form-group
              label="Name:"
              label-for="nameInput">
              <b-form-input 
                id="nameInput"
                type="text"
                v-model="name"
                required
                placeholder="Enter your full name"/>
            </b-form-group>
            <b-form-group
              label="Email:"
              label-for="emailInput">
              <b-form-input 
                id="emailInput"
                type="email"
                v-model="email"
                required
                placeholder="Enter email"/>
            </b-form-group>
            <b-form-group
              label="Password:"
              label-for="passwordInput">
              <b-form-input 
                id="passwordInput"
                type="password"
                v-model="pass"
                required
                placeholder="Enter Password"/>
            </b-form-group>
            <b-button 
              type="submit" 
              variant="primary">Submit</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <v-alert/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue"
import router from "@/router"
import { mapGetters } from "vuex"
import Alert from "@/components/auth/Alert.vue"
import Amplify from "@aws-amplify/core"

const Logger = Amplify.Logger

Vue.component("v-alert", Alert)

const logger = new Logger("SignUpPage")

export default {
  data() {
    return {
      username: "",
      email: "",
      name: "",
      pass: ""
    }
  },
  mounted() {
    // clear existing status message
    this.$store.dispatch("auth/clearAuthenticationStatus")
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async signUp() {
      logger.debug("sign-up")
      await this.$store.dispatch("auth/signUp", {
        username: this.username,
        password: this.pass,
        attributes: {
          name: this.name,
          email: this.email
        }
      })

      if (!this.hasAuthenticationStatus) {
        router.push("confirmSignUp")
      }
    }
  }
}
</script>
