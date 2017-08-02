import Vue from 'vue'
import CognitoAuth from './cognito'
import config from '@/config'

Vue.use(CognitoAuth, config)

export default new CognitoAuth()
