<template>
  <header
    id="c-site-header"
    :class="{ 'c-site-header--bg' : showBackground }"
    class="c-site-header u-padding-horizontal u-padding-vertical-small">
    <div class="c-site-header__brand u-1/5">
      <a href="/">
        <img src="../assets/images/logoemblema.svg" alt="">
      </a>
    </div>
    <div class="c-site-header__menu u-4/5" :class="{ 'c-site-header__menu--light' : darkText }">
      <ul>
        <li><router-link :to="{ name: 'services' }">Servicios</router-link>
        <li><router-link :to="{ name: 'work' }">Trabajo</router-link>
        <li><router-link :to="{ name: 'process' }">Proceso</router-link>
        <li><router-link :to="{ name: 'culture' }">Cultura</router-link>
        <li><a href="">ES</a> / <a href="">EN</a></li>
      </ul>
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

  created () {
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
