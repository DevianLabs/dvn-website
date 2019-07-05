<template>
  <header
    id="c-site-header"
    :class="{ 'c-site-header--bg' : showBackground }"
    class="c-site-header u-padding-vertical">
    <div class="o-wrapper">
      <div class="c-site-header__brand u-2/5">
        <router-link :to="{ path: '/' }">
          <img class="c-site-header__brand__img" src="../assets/images/logoemblema.svg" />
        </router-link>
      </div>
      <div class="c-site-header__menu u-3/5" :class="{ 'c-site-header__menu--light' : darkText }">
        <div class="c-site-header__menu__fold">
          <span>Menu</span>
        </div>
        <ul class="c-site-header__menu__list">
          <li><router-link :to="{ name: 'services' }">Servicios</router-link>
          <li><router-link :to="{ name: 'work' }">Trabajo</router-link>
          <li><router-link :to="{ name: '' }">Proceso</router-link>
          <li><router-link :to="{ name: '' }">Cultura</router-link>
          <li><a href="">ES</a> / <a href="">EN</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import position from '@/utils/position';

export default {
  /**
   * NAME
   */
  name: 'Header',

  data() {
    return {
      darkText: false,
      headerOffset: null,
      showBackground: false,
    };
  },

  mounted () {
    this.handleScroll();

    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const currentHeaderOffset = position.offset(document.getElementById('c-site-header'));

      this.setBackgroundColor(currentHeaderOffset);
      this.setColorText(currentHeaderOffset);
    },

    setBackgroundColor(headerOffset) {
      this.showBackground = headerOffset.top && headerOffset.top < this.headerOffset;

      this.headerOffset = headerOffset.top;
    },

    setColorText(headerOffset) {
      const lightSections = Array.from(document.getElementsByClassName('light'));

      this.darkText = !this.showBackground && lightSections.some(lightSections => {
        const darkSectionOffset = position.offset(lightSections);

        return headerOffset.top >= darkSectionOffset.top
          && headerOffset.top <= darkSectionOffset.bottom;
      });
    },
  },
};
</script>
