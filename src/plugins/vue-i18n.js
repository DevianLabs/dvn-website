/* ============
 * Vue i18n
 * ============
 *
 * https://kazupon.github.io/vue-i18n/
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/locale';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: navigator.language.substr(0, 2),
  fallbackLocale: 'es',
  messages,
});

export default {
  i18n,
};
