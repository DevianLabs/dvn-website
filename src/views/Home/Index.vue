<template>
  <v-layout>
    <div class="o-pack u-padding-vertical-small u-4/5@desktop u-5/5@tablet u-5/5@mobile">
      <p class="u-h1 u-color-silver">
        <i>Hello world!</i>
      </p>
      <p class="u-h1 u-color-silver">
        <i>{{ $t('hero.hello') }}</i>
      </p>
    </div>

    <div class="o-pack u-padding-vertical-small u-1/3@desktop u-1/3@tablet u-3/3@mobile">
      <div>
        <img
          class="o-logo"
          src="@/assets/img/logo-full.png">
      </div>
      <div class="u-padding-vertical-small">
        <small class="u-color-black">
          <b><i>{{ $t('hero.slogan') }}</i></b>
        </small>
      </div>
    </div>

    <div class="u-padding-vertical-small">
      <div class="u-h4">
        <span>{{ $t('hero.drop-us') }}</span>
        <br>
        <a href="#">{{ email }}</a>
      </div>
    </div>

    <div class="u-padding-vertical">
      <div class="u-h4">
        <span>{{ $t('hero.follow-us') }}</span>
        <br>
        <ul class="o-list-inline">
          <li
            v-for="(social, i) in socialList"
            :key="i"
            class="o-list-inline__item u-margin-right">
            <a
              :href="social.url"
              :title="social.name">{{ social.key }}</a>
          </li>
        </ul>
      </div>
    </div>

  </v-layout>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 */

import VLayout from '@/layouts/Hero.vue';

export default {
  name: 'HomeIndex',

  components: {
    VLayout,
  },

  data() {
    return {
      socialList: [
        { key: 'Gh', name: 'Github', url: 'https://github.com/devianlabs' },
        { key: 'Li', name: 'LinkedIn', url: 'https://www.linkedin.com/company/devian-labs' },
        { key: 'Me', name: 'Medium', url: 'http://medium.com/devianlabs' },
        { key: 'Fb', name: 'Facebook', url: 'https://facebook.com/devianlabs' },
        { key: 'Tw', name: 'Twitter', url: 'http://twitter.com/devianlabs' },
        { key: 'In', name: 'Instagram', url: 'http://instagram.com/devianlabs' },
        { key: 'Dr', name: 'Dribbble', url: 'https://dribbble.com/devianlabs' },
      ],
      email: 'hello@devianlabs.com',
    };
  },
};
</script>
