import Vue from 'vue'
import Firebase from 'firebase'
import 'firebase/firestore'

const firebasePlugin = {
  install () {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$firebase) {
      Vue.prototype.$firebase = Firebase.initializeApp({
        apiKey: process.env.apiKey || 'AIzaSyAFcYcevIvsPEiUHxo34kCoWRCySbswsd4',
        authDomain: process.env.authDomain || 'albasimia-blog.firebaseapp.com',
        databaseURL: process.env.databaseURL || 'https://albasimia-blog.firebaseio.com',
        projectId: process.env.projectId || '',
        storageBucket: process.env.storageBucket || 'albasimia-blog.appspot.com'
      })
    }
  }

}

Vue.use(firebasePlugin)

export default (ctx) => {
  const { app, store } = ctx

  app.$firebase = Vue.prototype.$firebase
  ctx.$firebase = Vue.prototype.$firebase
  if (store) {
    store.$firebase = Vue.prototype.$firebase
  }
}
