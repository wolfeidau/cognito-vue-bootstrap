<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>Confirm Account</h2>
    <p>
      Enter your confirmation code which was emailed to you.
    </p>
    <div class="alert alert-danger" v-if="error">
      <p v-if="error" class="error">{{ errMsg }}</p>
    </div>
    <form @submit.prevent="confirm">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your username" v-model="username">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter your confirmation code" v-model="code">
      </div>
      <button class="btn btn-primary">confirm</button>
    </form>
    <div class="row marketing">
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data () {
    return {
      username: '',
      code: '',
      error: false,
      errMsg: 'An error occured.'
    }
  },
  methods: {
    confirm () {
      auth.confirm(this.username, this.code, (err, result) => {
        if (err) {
          this.error = true
          this.errMsg = err.message
          console.error(err)
        } else {
          this.$router.replace('/login')
        }
      })
    }
  }
}
</script>
