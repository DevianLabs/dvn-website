import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/Services.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/Services.vue'),
    },
    {
      path: '/process',
      name: 'process',
      component: () => import('@/views/Services.vue'),
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('@/views/Culture.vue'),
    },

    // RDIRECTS
    { path: '/', redirect: '/home' },
  ],
});
