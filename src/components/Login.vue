<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Log In</h2>
    <p v-if="$route.query.redirect">
      Log in to your account.
    </p>
    <div class="alert alert-danger" v-if="error">
      <p v-if="error" class="error">{{ errMsg }}</p>
    </div>
    <form @submit.prevent="login">
      <div class="form-group">
        <input id="inputUsername" type="text" class="form-control" placeholder="Enter your username" v-model="username">
      </div>
      <div class="form-group">
        <input id="inputPassword" type="password" class="form-control" placeholder="Enter your password" v-model="pass">
      </div>
      <button class="btn btn-primary">login</button>
    </form>
    <div class="row marketing">
    <p>
      <router-link to="/signup">Create an account</router-link> or <router-link to="/reset_password">reset password</router-link>.
    </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      pass: '',
      error: false,
      errMsg: 'An error occured.'
    }
  },
  methods: {
    login () {
      this.$cognitoAuth.signin(this.username, this.pass, (err, result) => {
        if (err) {
          this.error = true
          this.errMsg = err.message
          console.error(err)
        } else {
          console.log('Login Successful:', result)
          this.$router.replace(this.$route.query.redirect || '/dashboard')
        }
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
