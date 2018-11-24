/* ============
 * Vuex Store
 * ============
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  // Assign the modules to the store.
  modules: { },

  //
  strict: debug,

  // Plugins
  plugins: debug ? [createLogger()] : [],
});
