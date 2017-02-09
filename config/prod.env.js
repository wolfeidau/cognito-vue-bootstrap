module.exports = {
  NODE_ENV: '"production"',
  AWS_REGION: quote(process.env.AWS_REGION),
  COGNITO_CLIENT_ID: quote(process.env.COGNITO_CLIENT_ID),
  COGNITO_IDENTITY_POOL_ID: quote(process.env.COGNITO_IDENTITY_POOL_ID),
  COGNITO_USER_POOL_ID: quote(process.env.COGNITO_USER_POOL_ID)
}

function quote(value) {
  return '"' + value + '"'
}