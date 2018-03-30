import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'


Vue.use(VueResource);
Vue.use(VueRouter);

const routes =[
  { path: '/', component: Home},
  { path: '/dogs', component: Dogs},
  { path: '/people', component: People},
  { path: '/plants', component: Plants},
  { path: '/city', component: City},
  { path: '/single', component: Single},
  { path: '/Show', component: Show},
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
