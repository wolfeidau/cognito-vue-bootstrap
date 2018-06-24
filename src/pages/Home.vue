<template>
  <b-container>
    <div class="b-main-content">
      <h2>Cognito Bootstrap Vue</h2>
      <p>This site provides an example of how to use <b-link href="https://aws.amazon.com/cognito">Amazon Cognito</b-link> with <b-link href="https://vuejs.org">Vue.js</b-link></p>
      <p>To give it a try:</p>
      <ol>
        <li>Sign up using your email address, this will send through an activation code.</li>
        <li>Once you get the activation code enter it with your email address.</li>
        <li>Sign in with your credentials.</li>
        <li>Request a password reset to recover an account.</li>
        <li>Change your password.</li>
      </ol>
      <p>
        <b-button 
          variant="outline-dark" 
          to="signUp">Sign Up</b-button>
      </p> 
      <p>
        The full source code for this example application is available here:
      </p> 
      <ul>
        <li><b-link href="https://github.com/wolfeidau/cognito-vue-bootstrap">https://github.com/wolfeidau/cognito-vue-bootstrap</b-link></li>
      </ul> 
    </div>
  </b-container>
</template>

<script>
export default {
    
}
</script>

