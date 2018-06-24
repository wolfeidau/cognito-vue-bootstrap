<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="4">
        <div class="b-form-1">
          <h2>Change Password</h2>
          <p>Request a password change.</p>
          <b-form @submit.prevent="passwordChange">
            <b-form-group
              label="Current Password:"
              label-for="currentPasswordInput">
              <b-form-input 
                id="currentPasswordInput"
                type="password"
                v-model="currentPassword"
                required
                placeholder="Enter Current Password"/>
            </b-form-group>
            <b-form-group
              label="New Password:"
              label-for="newPasswordInput">
              <b-form-input 
                id="newPasswordInput"
                type="password"
                v-model="newPassword"
                required
                placeholder="Enter New Password"/>
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
      currentPassword: "",
      newPassword: ""
    }
  },
  computed: {
    ...mapGetters("auth", ["hasAuthenticationStatus"])
  },
  methods: {
    async passwordChange() {
      await store.dispatch("auth/passwordChange", {
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
      })
      if (!this.hasAuthenticationStatus) {
        router.push("dashboard")
      }
    }
  }
}
</script>