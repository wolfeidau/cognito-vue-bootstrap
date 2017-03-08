import {Config, CognitoIdentityCredentials} from 'aws-sdk'
import {CognitoUserPool, CognitoUser, AuthenticationDetails, CognitoUserAttribute} from 'amazon-cognito-identity-js'

export default class CognitoAuth {

  constructor (options) {
    console.log('options', options)

    this.apps = []
    this.options = options
    this.userSession = null
    this.userPool = new CognitoUserPool({
      UserPoolId: options.UserPoolId,
      ClientId: options.ClientId
    })
    Config.region = options.region
    Config.credentials = new CognitoIdentityCredentials({
      IdentityPoolId: options.IdentityPoolId
    })
  }

  isAuthenticated (cb) {
    let cognitoUser = this.getCurrentUser()

    if (cognitoUser != null) {
      cognitoUser.getSession((err, session) => {
        if (err) {
          return cb(err, false)
        }
        console.log('UserLoginService: Session is', session.isValid())
        return cb(null, true)
      })
    } else {
      cb(null, false)
    }
  }

  signup (username, email, pass, cb) {
    let attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]

    this.userPool.signUp(username, pass, attributeList, null, cb)
  }

  confirmRegistration (username, code, cb) {
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool
    })
    cognitoUser.confirmRegistration(code, true, cb)
  }

  resendCode (username, code, cb) {
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool
    })
    cognitoUser.resendConfirmationCode(cb)
  }

  signin (username, pass, cb) {
    let authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: pass
    })
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: this.userPool
    })
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        var logins = {}
        logins['cognito-idp.' + this.options.region + '.amazonaws.com/' + this.options.UserPoolId] = result.getIdToken().getJwtToken()

        Config.credentials = new CognitoIdentityCredentials({
          IdentityPoolId: this.options.UserPoolId,
          Logins: logins
        })
        this.onChange(true)
        cb(null, result)
      },
      onFailure: (err) => {
        cb(err)
      }
    })
  }

  logout () {
    this.getCurrentUser().signOut()
    this.onChange(false)
  }

  /**
   * Resolves the current token based on a user session. If there
   * is no session it returns null.
   * @param {*} cb callback
   */
  getIdToken (cb) {
    if (this.userPool.getCurrentUser() == null) {
      return cb(null, null)
    }
    this.userPool.getCurrentUser().getSession((err, session) => {
      if (err) return cb(err)
      if (session.isValid()) {
        return cb(null, session.getIdToken().getJwtToken())
      }
      cb(Error('Session is invalid'))
    })
  }

  getCurrentUser () {
    return this.userPool.getCurrentUser()
  }

  init (app) {
    this.apps.push(app)
  }

  // very primitive change listener
  onChange () {}
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
