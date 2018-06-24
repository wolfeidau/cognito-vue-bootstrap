<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>Reset Password</h2>
          <p>Request a password reset code via email.</p>
          <b-form @submit.prevent="passwordReset">
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

import { mapGetters } from "vuex"
import router from "@/router"
import store from "@/store"

import Alert from "@/components/auth/Alert.vue"

Vue.component("v-alert", Alert)

export default {
  data() {
    return {
      username: "",
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async passwordReset() {
      await store.dispatch("auth/passwordReset", {
        username: this.username
      })
      if (!this.hasAuthenticationStatus) {
        router.push("confirmPasswordReset")
      }
    }
  }
}
</script>
