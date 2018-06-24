<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>Confirm Reset Password</h2>
          <p>Confirm a password reset using the code you recieved via emailed.</p>
          <b-form-group
            label="Username:"
            label-for="usernameInput">
            <b-form-input 
              id="usernameInput"
              type="text"
              v-model="username"
              required
              autofocus
              placeholder="Enter username"/>
          </b-form-group>
          <b-form-group
            label="Code:"
            label-for="codeInput">
            <b-form-input 
              id="codeInput"
              type="password"
              v-model="code"
              required
              placeholder="Enter Code"/>
          </b-form-group>
          <b-form-group
            label="Password:"
            label-for="passwordInput">
            <b-form-input 
              id="passwordInput"
              type="password"
              v-model="password"
              required
              placeholder="Enter Code"/>
          </b-form-group>
          <b-button 
            type="submit" 
            variant="primary" 
            @click="confirmPasswordReset">Submit</b-button>
          <b-button 
            variant="primary" 
            @click="passwordResetResend">Resend Code</b-button>
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

import { mapGetters } from "vuex"
import router from "@/router"
import store from "@/store"

import Alert from "@/components/auth/Alert.vue"

Vue.component("v-alert", Alert)

export default {
  data() {
    return {
      username: "",
      code: "",
      password: "",
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async confirmPasswordReset() {
      await store.dispatch("auth/confirmPasswordReset", {
        username: this.username,
        code: this.code,
        password: this.password,
      })
      if (!this.hasAuthenticationStatus) {
        router.push("signIn")
      }
    },
    async passwordResetResend() {
      await store.dispatch("auth/passwordReset", {
        username: this.username
      })
    }
  }
}
</script>
