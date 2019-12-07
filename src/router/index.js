import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "@/views/login.vue"
import SecureComponent from "@/views/secure.vue"
import HomeComponent from "@/views/home.vue"

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
      redirect:{
      name: 'login' //quando chegar '/'
      }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/secure',
    name: 'secure',
    component: SecureComponent
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  }
]

const router = new VueRouter({
  routes
})

export default router
