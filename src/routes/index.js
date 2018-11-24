/* ============
 * Routes File
 * ============
 *
 */

export default [
  // Home page
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),
  },

  /**
   * REDIRECTS
   */
  {
    path: '/',
    redirect: '/home',
  },
];
