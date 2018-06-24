<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>Confirm Sign Up</h2>
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
          <b-button 
            type="submit" 
            variant="primary" 
            @click="confirmSignUp">Submit</b-button>
          <b-button 
            variant="primary" 
            @click="confirmResend">Resend Code</b-button>
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
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async confirmSignUp() {
      await store.dispatch("auth/confirmSignUp", {
        username: this.username,
        code: this.code
      })
      if (!this.hasAuthenticationStatus) {
        router.push("signIn")
      }
    },
    async confirmResend() {
      await store.dispatch("auth/confirmResend", {
        username: this.username
      })
    }
  }
}
</script>
