const config = {
  // To get the AWS Credentials, you need to configure
  // the Auth module with your Cognito Federated Identity Pool
  Auth: {
    identityPoolId: process.env.IDENTITY_POOL_ID,
    region: process.env.AWS_REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID,
    mandatorySignIn: false,
    clientMetadata: { app: "cognito-vue-bootstrap" }
  },
  Analytics: {
    disabled: false,
    autoSessionRecord: true,
    AWSPinpoint: {
      appId: process.env.PINPOINT_APP_ID,
      region: process.env.AWS_REGION
    }
  }
};

export default config;
