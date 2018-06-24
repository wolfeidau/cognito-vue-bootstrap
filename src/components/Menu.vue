<template>
  <b-navbar 
    toggleable="md" 
    type="dark">
    <b-navbar-toggle target="nav_collapse"/>
    <b-navbar-brand to="/">Cognito Bootstrap</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/dashboard">Dashboard</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item 
        v-if="!isAuthenticated" 
        class="nav-btn" 
        to="/signIn"><span class="nav-username">Sign In</span></b-nav-item>
      <b-nav-item-dropdown 
        v-if="isAuthenticated" 
        right>
        <template slot="button-content">
          <icon name="user-circle"/><strong class="nav-username">{{ user.username }}</strong>
        </template>
        <b-row 
          class="justify-content-md-center" 
          style="margin:5px">
          <b-dropdown-item to="/changePassword"><span class="nav-username">Change Password</span></b-dropdown-item>
          <b-dropdown-item to="/signOut"><icon name="sign-out"/><span class="nav-username">Sign Out</span></b-dropdown-item>
        </b-row>
      </b-nav-item-dropdown>
      <b-nav-item 
        class="nav-btn" 
        href="https://twitter.com/wolfeidau"><icon name="twitter"/></b-nav-item>
      <b-nav-item 
        class="nav-btn" 
        href="https://github.com/wolfeidau/cognito-vue-bootstrap"><icon name="github"/></b-nav-item>
    </b-navbar-nav>
  </b-navbar>    
</template>

<script>
import { mapState } from 'vuex'

import 'vue-awesome/icons/user-circle'
import 'vue-awesome/icons/sign-out'
import 'vue-awesome/icons/github'
import 'vue-awesome/icons/twitter'

export default {
    name: 'Navbar',
    computed: {
        ...mapState({
            user: state => state.auth.user,
            isAuthenticated: state => state.auth.isAuthenticated,
        })
    },
    methods: {
        signIn() {
            this.$store.dispatch('signIn')
        }
    }
}
</script>

<style scoped>
.navbar {
    background-color: #563d7c;
}
.navbar-nav .nav-link {
    color: #cbbde2;
}
.nav-username {
  padding-left: .5em;
  padding-right: .5em;
}
</style>
