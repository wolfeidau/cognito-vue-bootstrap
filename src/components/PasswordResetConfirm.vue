<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Confirm Password Reset</h2>
    <p>Enter your confirmation code which was emailed to you and a new password.</p>
    <div class="alert alert-danger" v-if="error">
      <p v-if="error" class="error">{{ error.message }}</p>
    </div>
    <form @submit.prevent="passwordResetConfirm">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your username" v-model="username" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your confirmation code" v-model="code" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Enter your password" v-model="pass" required>
      </div>
      <button class="btn btn-primary">confirm password reset</button>
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
      code: '',
      pass: '',
      error: null
    }
  },
  methods: {
    passwordResetConfirm () {
      this.$cognitoAuth.confirmPassword(this.username, this.code, this.pass, (err, result) => {
        if (err) {
          this.error = err
          console.error(err)
        } else {
          console.log('Signup successful:', result)
          this.$router.replace('/')
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
