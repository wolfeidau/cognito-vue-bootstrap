# cognito-vue-bootstrap

This application illustrates how to use the [Amazon Amplify](https://github.com/aws/aws-amplify) with [vue.js](https://vuejs.org/), it includes signup, signin, signout, recover password and account verification using email or sms codes. It uses [bootstrap-vue](https://bootstrap-vue.js.org/) for layout.

# overview

This example application currently illustrates the following:

* Sign Up for an account
* Verify your account by entering verification code which has been sent to you via emailed or SMS
* Dashboard which requires authentication to access
* Change Password
* Recover Password using verification code which has been sent to you via emailed or SMS
* Sign In to the application
* Sign Out of the application

Demo version is located at https://cognito-vue-bootstrapv2.wolfe.id.au/

# Build Setup

Before you start have a read over [What is Amazon Cognito?](http://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html)

To setup this project you first need to configure an aws mobile project using the following snapshot [CognitoVue](https://console.aws.amazon.com/mobilehub/home#/snapshot/ef9bu3t7nsa8uz).

For more information on this process see [Exporting and Importing AWS Mobile Hub Projects](https://docs.aws.amazon.com/aws-mobile/latest/developerguide/project-import-export.html)

Once you have imported the project you will have created:

* An S3 bucket with Cloudfront for your web application.
* A Cognito pool to store your users
* An analytics project to capture metrics on your users login / failure ect.

Click on the integrate button in your aws mobile project, the download and extract the cloud config zip file, find `aws-exports.js` inside, and place it in `src/` directory.

I use [yarn](https://yarnpkg.com/) to build and run this project.

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build
```

Sync all the files from your `dist` directory up to the S3 hosting bucket within your AWS Mobile project using the following command.

```
aws --region ap-southeast-2 s3 sync dist/ s3://cognitovuebootstrap-hosting-mobilehub-XXXXXXXXXX/ --delete --acl public-read
```

# hosting configuration notes

To host a website on a custom URL using AWS mobile I have found some changes to the current setup. Navigating to the buckets and CDN configuration is done via the `Hosting And Streaming` panel in the mobile project UI.

* disable website hosting on the hosting S3 bucket
* add an Error Page which sends any 404 (not found) errors to `/index.html` in cloudfront
* enable redirect http -> https on the origin
* configure a route53 domain for your website
* configure a AWS Certificate Manager (ACM) certificate for your domain
* add an A record in route53 of type `alias` pointing to your Cloudfront distribution, then update the origin domain name to match the FQDN.

## Todo

* Sort out Testing/Mocking

For a more detailed explanation on how things work, checkout:

* [AWS Amplify Documentation](https://aws.github.io/aws-amplify/)
* [AWS Amplify Modularization](https://github.com/aws-amplify/amplify-js/wiki/Amplify-modularization)
* [docs for vue-cli](https://cli.vuejs.org/)
* [docs for vue-router](http://router.vuejs.org/en/)
* [docs for vuex](https://vuex.vuejs.org/)

# License

This project is released under the Apache License, Version 2.0.
