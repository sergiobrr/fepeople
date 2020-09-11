import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'People',
    component: () => import(/* webpackChunkName: "people" */ '../views/People.vue')
  },
  {
    path: '/people/new_person',
    name: 'NewPerson',
    component: () => import(/* webpackChunkName: "newperson" */ "../views/NewPerson.vue")
  },
  {
    path: '/people/:_id',
    name: 'Person',
    component: () => import(/* webpackChunkName: "peopledetails" */ "../views/Person.vue")
  },
  {
    path: '/desires',
    name: 'Desires',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "desires" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
