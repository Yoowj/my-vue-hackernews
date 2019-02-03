import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';


import NewsView from './views/NewsView.vue'


Vue.config.productionTip = false

const router = new VueRouter({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView
    }
  ]
});

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
