<template>
  <b-jumbotron 
    header="Cognito Bootstrap Vue" 
    lead="This site provides an example of how to use Amazon Cognito with vue.js" >
    <p/>
    <p>To give it a try:</p>
    <ol>
      <li>Signup using your email address, this will send through an activation code.</li>
      <li>Once you get the activation code enter it with your email address.</li>
      <li>Sign in with your credentials.</li>
      <li>Request a password reset to recover an account.</li>
      <li>Change your password.</li>
      <li>You should now be able to navigate to the dashboard and see your JWT token decoded</li>
    </ol>
    <b-link to="signUp">Sign Up</b-link>
  </b-jumbotron>
</template>

<script>
export default {
    
}
</script>

