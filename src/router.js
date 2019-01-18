import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Players from './views/Players.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/players',
      name: 'players',
      component: Players
    }
  ]
})
