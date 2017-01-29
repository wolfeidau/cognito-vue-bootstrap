/* globals localStorage */
import appConfig from './config'
import {Config, CognitoIdentityCredentials} from 'aws-sdk'
import {CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser} from 'amazon-cognito-identity-js'

Config.region = appConfig.region
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
})

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId
})

export default {
  userSession: null,

  signup (username, email, pass, cb) {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email
      })
    ]

    userPool.signUp(username, pass, attributeList, null, cb)
  },

  login (username, pass, cb) {
    let authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: pass
    })
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool
    })
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        this.userSession = result
        localStorage.setItem('id_token', result.getAccessToken().getJwtToken())
        this.onChange(true)
        cb(null, result)
      },
      onFailure: (err) => {
        cb(err)
      }
    })
  },

  confirm (username, code, cb) {
    let cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool
    })
    cognitoUser.confirmRegistration(code, true, cb)
  },

  getToken () {
    console.log('this.userSession', this.userSession)
    return localStorage.getItem('id_token')
  },

  logout (cb) {
    localStorage.removeItem('id_token')
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn () {
    var jwt = localStorage.getItem('id_token')
    return !!jwt
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  },

  // very primitive change listener
  onChange () {}
}
