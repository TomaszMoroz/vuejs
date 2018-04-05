import Vue from 'vue'
import App from './App.vue'
import Flowers from './components/Flowers.vue'
import Dogs from './components/Dogs.vue'
import People from './components/People.vue'
import Home from './components/Home.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

const routes =[
  { path: '/', component: Home},
  { path: '/flowers', component: Flowers},
  { path: '/dogs', component: Dogs},
  { path: '/people', component: People},

]

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
