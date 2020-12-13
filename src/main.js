// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Layout.vue'
import util from '~/utils/util'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// import 'mavon-editor/dist/markdown/github-markdown.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vant from 'vant'
import 'vant/lib/index.css'
import store from '~/store'
const markdownIt = require('markdown-it')

export default function (Vue) {
  // Set default layout as a global component
  Vue.prototype.$util = util
  Vue.prototype.$setTitle = function (title) {
    // if (title) {
    //   document.title = store.state.configuration.htmlTitle + " - " + title
    // } else {
    //   document.title = store.state.configuration.htmlTitle
    // }
  }
  Vue.prototype.$markdown = function (value) {
    return markdownIt.render(value)
  }
  Vue.prototype.$reload = function (context) {
    let NewPage = '/empty'
    context.$router.push(NewPage)
    context.$nextTick(() => (context.$router.go(-1)))
  }
  Vue.use(Vant)
  Vue.use(ElementUI)
  // Vue.use(mavonEditor)
  Vue.component('Layout', DefaultLayout)
}