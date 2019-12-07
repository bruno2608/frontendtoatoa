import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'




const vuetifyOptions = { }
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  store,
  render: h => h(App)
}).$mount('#app')
