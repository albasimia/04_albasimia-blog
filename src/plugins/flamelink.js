import Vue from 'vue'
import firebase from 'firebase'
// import * as firebase from 'firebase';
import Flamelink from 'flamelink'

const Plugin = {
  install: (Vue, options) => {

    let firebaseApp

    if (firebase.apps && firebase.apps.length > 0) {
      firebase.apps[0].options_.projectId = 'albasimia-blog'
      firebaseApp = firebase.apps[0]
    } else {
      firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAFcYcevIvsPEiUHxo34kCoWRCySbswsd4",
        authDomain: "albasimia-blog.firebaseapp.com",
        databaseURL: "https://albasimia-blog.firebaseio.com",
        projectId: "albasimia-blog",
        storageBucket: "albasimia-blog.appspot.com",
        messagingSenderId: "692821435666"
      })
    }
    Vue.prototype.$flamelink = Flamelink({ firebaseApp })
  }
}

Vue.use(Plugin)

export default (ctx) => {
  const { app, store } = ctx

  app.$flamelink = Vue.prototype.$flamelink
  ctx.$flamelink = Vue.prototype.$flamelink
  if (store) {
    store.$flamelink = Vue.prototype.$flamelink
  }
}