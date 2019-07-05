import Vue from 'vue';
import Router from 'vue-router';

const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  if (to.hash) {
    if (document.querySelector(to.hash)) {
      return { selector: to.hash };
    } else {
      return false;
    }
  }

  return { x: 0, y: 0 };
};

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/Work.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/Services.vue'),
    },
    {
      path: '/process',
      name: 'process',
      component: () => import('@/views/Process.vue'),
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('@/views/Culture.vue'),
    },
  ],
});
