var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  AWS_REGION: '"us-west-2"',
  COGNITO_CLIENT_ID: '"testing"',
  COGNITO_IDENTITY_POOL_ID: '"testing"',
  COGNITO_USER_POOL_ID: '"us-west-2_iTZAAAA"'
})
