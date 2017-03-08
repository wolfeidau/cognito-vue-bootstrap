<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Sign Up</h2>
    <p>Sign up for an account.</p>
    <div class="alert alert-danger" v-if="error">
      <p v-if="error" class="error">{{ errMsg }}</p>
    </div>
    <form @submit.prevent="signup">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your username" v-model="username">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your email" v-model="email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Enter your password" v-model="pass" >
      </div>
      <button class="btn btn-primary">signup</button>
    </form>
    <div class="row marketing">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      pass: '',
      error: false,
      errMsg: 'An error occured.'
    }
  },
  methods: {
    signup () {
      this.$cognitoAuth.signup(this.username, this.email, this.pass, (err, result) => {
        if (err) {
          this.error = true
          this.errMsg = err.message
          console.error(err)
        } else {
          console.log('Signup successful:', result)
          this.$router.replace('/confirm')
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
