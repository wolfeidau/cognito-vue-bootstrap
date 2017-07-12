<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Change Password</h2>
    <p>Change your password.</p>
    <div class="alert alert-danger" v-if="error">
      <p v-if="error" class="error">{{ error.message }}</p>
    </div>
    <form @submit.prevent="passwordChange">
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Enter your password" v-model="oldpass" required>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Enter your new password" v-model="newpass" required>
      </div>
      <button class="btn btn-primary">change password</button>
    </form>
    <div class="row marketing">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldpass: '',
      newpass: '',
      error: null
    }
  },
  methods: {
    passwordChange () {
      this.$cognitoAuth.changePassword(this.oldpass, this.newpass, (err, result) => {
        if (err) {
          this.error = err
          console.error(err)
        } else {
          console.log('Password change successful:', result)
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
