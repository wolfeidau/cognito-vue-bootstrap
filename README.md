# cognito-vue-bootstrap

This application illustrates how to use the [Amazon cognito](https://aws.amazon.com/cognito/) service with [vue.js](https://vuejs.org/), it includes signup, login, logout and account verification using email / sms codes. It uses [bootstrap](http://getbootstrap.com/) for layout.

# overview

This example application currently illustrates the following:

* Sign Up for an account
* Verify your account by entering verification code which has been sent to you via emailed or SMS
* Dashboard which requires authentication to access, currently this just shows your JWT token
* Log In to the application
* Log Out of the application

Demo version is located at https://cognito-vue-bootstrap.wolfe.id.au/

# Build Setup

Before you start have a read over [What is Amazon Cognito?](http://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)

To setup this project you first need to configure the Cognito service in the [AWS console](https://console.aws.amazon.com/cognito/users) then create `.env` file.

There are two sections to the Cognito configuration:

1. User Pools
2. Federated Identity Pools

These are configured in that order and during the configuration process you will extract the following properties and create the `.env` using the `.env.example` I have included.

```
AWS_REGION=us-west-2
COGNITO_USER_POOL_ID=us-west-2_xxx
COGNITO_CLIENT_ID=xxx
COGNITO_IDENTITY_POOL_ID=us-west-2:xxxx
```

I use [yarn](https://yarnpkg.com/) to build and run this project.

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

## Todo

* Separate out configuration and make it easier!
* Sort out Testing/Mocking
* Add password change and recovery
* Integrate congnito sync for user profile information

For a more detailed explanation on how things work, checkout:

* [Accessing Your User Pools using the Amazon Cognito Identity SDK for JavaScript](https://aws.amazon.com/blogs/mobile/accessing-your-user-pools-using-the-amazon-cognito-identity-sdk-for-javascript/)
* [amazon-cognito-identity-js](https://github.com/aws/amazon-cognito-identity-js)
* [docs for vue-loader](http://vuejs.github.io/vue-loader)
* [docs for vue-router](http://router.vuejs.org/en/)
* [vue.js webpack guide](http://vuejs-templates.github.io/webpack/)

# License

This project is released under the Apache License, Version 2.0.
