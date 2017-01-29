# cognito-vue-bootstrap

This application illustrates how to use the [Amazon cognito](https://aws.amazon.com/cognito/) service with [vue.js](https://vuejs.org/), it includes signup, login, logout and account verification using email / sms codes. It uses [bootstrap](http://getbootstrap.com/) for layout.

## Build Setup

Before you start have a read over [What is Amazon Cognito?](http://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)

To setup this project you first need to configure the cognito service in the [AWS console](https://console.aws.amazon.com/cognito/users) then update `src/config.js`.

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
