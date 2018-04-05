import Vue from 'vue'
import App from './App.vue'
import Show from './components/Show.vue'
import Dogs from './components/Dogs.vue'
import Home from './components/Home.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

const routes =[
  { path: '/', component: Home},
  { path: '/flowers', component: Show},
  { path: '/dogs', component: Dogs},

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
