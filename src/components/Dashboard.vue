<template>
  <div>
    <h2>Dashboard</h2>
    <p>Yay you made {{ user.username }} it!</p>
    <blockquote>{{ token }}</blockquote>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'
export default {
  data () {
    return {
      token: 'Loading token..'
    }
  },
  created () {
    this.$cognitoAuth.getIdToken((err, jwtToken) => {
      if (err) {
        console.log("Dashboard: Couldn't get the session:", err, err.stack)
        return
      }
      this.token = jwtDecode(jwtToken)
      this.user = this.$cognitoAuth.getCurrentUser()
    })
  }
}

</script>
