<template>
  <b-row class="justify-content-md-center">
    <b-col cols="8">
      <h2>Sign Out...</h2>
    </b-col>
  </b-row>
</template>


<script>
import router from "@/router"

export default {
  async created() {
    await this.$store.dispatch("auth/signOut")
    router.push("/")
  }
}
</script>
