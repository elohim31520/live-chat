import { createRouter, createWebHistory } from 'vue-router'
// import Welcome from '../views/Welcome.vue'
// import Chatroom from '../views/Chatroom.vue'
const Welcome = () => import(/* webpackChunkName: "views/Welcome" */'@/views/Welcome')
const Chatroom = () => import(/* webpackChunkName: "views/Chatroom" */'@/views/Chatroom')
import {projectAuth} from '../firebase/config'

// auth guard
const authGuard = (to ,from ,next) => {
  let user = projectAuth.currentUser
  if(!user) {
      next({name: 'Welcome'})
  }
  else next()
}

const noAuth = (to ,from ,next) =>{
  let user = projectAuth.currentUser
  if(user) {
      next({name: 'Chatroom'})
  }
  else next()
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: noAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: authGuard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
