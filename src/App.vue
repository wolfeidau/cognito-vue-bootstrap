<template>
  <div id="app">
    <b-container class="main" fluid>
      <v-menu />
      <router-view />
      <v-footer />
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Icon from "vue-awesome/components/Icon";

Vue.component("v-menu", Menu);
Vue.component("v-footer", Footer);
Vue.component("v-icon", Icon);

export default {
  name: "App"
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.main {
  margin: 0;
  padding: 0;
}

.b-main-content {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
}

.b-form-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-right: 0;
  margin-left: 0;
  border-width: 0.2rem;
}
</style>
