<template>
  <div>
    <h2>Dashboard</h2>
    <p>Yay you made it!</p>
    <blockquote>{{ token }}</blockquote>
  </div>
</template>

<script>
import auth from '../auth'
import jwtDecode from 'jwt-decode'
export default {
  data () {
    return {
      token: jwtDecode(auth.getToken())
    }
  }
}
</script>
