<template>
  <div class="jumbotron">
    <h2>Welcome</h2>
    <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  }
}
</script>
