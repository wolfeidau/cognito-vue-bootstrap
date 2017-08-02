export default class CognitoAuth {
  constructor (options) {
    this.apps = []
  }

  isAuthenticated (cb) {
    return cb(null, true)
  }

  init (app) {
    this.apps.push(app)
  }
}
CognitoAuth.install = function (Vue, options) {
  Object.defineProperty(Vue.prototype, '$cognitoAuth', {
    get () { return this.$root._cognitoAuth }
  })

  Vue.mixin({
    beforeCreate () {
      if (this.$options.cognitoAuth) {
        this._cognitoAuth = this.$options.cognitoAuth
        this._cognitoAuth.init(this)
      }
    }
  })
}
