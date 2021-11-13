import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';

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
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
    },
    { path: '*', redirect: '/login' },
  ],
});
