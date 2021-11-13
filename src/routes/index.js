import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  // base: '',
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    { path: '*', redirect: '/login' },
  ],
});
