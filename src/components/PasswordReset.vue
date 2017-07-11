<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Reset Password</h2>
    <p>Request a password reset.</p>
    <div class="alert alert-danger" v-if="error">
      <p v-if="error" class="error">{{ errMsg }}</p>
    </div>
    <form @submit.prevent="passwordReset">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your username" v-model="username">
      </div>
      <button class="btn btn-primary">reset password</button>
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
      error: false,
      errMsg: 'An error occured.'
    }
  },
  methods: {
    passwordReset () {
      this.$cognitoAuth.forgotPassword(this.username, (err, result) => {
        if (err) {
          this.error = true
          this.errMsg = err.message
          console.error(err)
        } else {
          console.log('Password reset successful:', result)
          this.$router.replace('/confirm_reset_password')
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
