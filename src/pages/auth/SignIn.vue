<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>Sign In</h2>
          <p>Sign into this site.</p>
          <b-form @submit.prevent="signIn">
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
        <p>
          <b-link to="signUp">Create an account</b-link> or <b-link to="passwordReset">reset password</b-link>
        </p>
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
import { mapGetters } from "vuex"
import router from "@/router"
import store from "@/store"

import Alert from "@/components/auth/Alert.vue"

Vue.component("v-alert", Alert)

export default {
  data() {
    return {
      email: "",
      pass: ""
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async signIn() {
      await store.dispatch("auth/signIn", {
        username: this.email,
        password: this.pass
      })

      if (!this.hasAuthenticationStatus) {
        router.push("dashboard")
      }
    }
  }
}
</script>

<style>
</style>
