import Vue from 'vue'
import CognitoAuth from './cognito'
import config from '@/config'

Vue.use(CognitoAuth)

export default new CognitoAuth(config)
