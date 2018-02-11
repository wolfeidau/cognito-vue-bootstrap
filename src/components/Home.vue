<template>
  <div class="row marketing">
    <h2>Welcome</h2>
    <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    <p>This site provides an example of how to use Amazon cognito with vue.js</p>
    <p>To give it a try:</p>
    <ol>
      <li>Signup using your email address, this will send through an activation code.</li>
      <li>Once you get the activation code enter it with your email address.</li>
      <li>Sign in with your credentials.</li>
      <li>Request a password reset to recover an account.</li>
      <li>Change your password.</li>
      <li>You should now be able to navigate to the dashboard and see your JWT token decoded</li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['loggedIn'],
  created: function () {
    this.$cognitoAuth.isAuthenticated((err, loggedIn) => {
      if (err) {
        console.err("Home: Couldn't get the session:", err, err.stack)
        return
      }
      this.loggedIn = loggedIn
    })
  }
}
</script>
