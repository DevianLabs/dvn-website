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
          <a @click="menuOpen = !menuOpen">{{ menuOpen ? 'Cerrar' : 'Menu' }}</a>
        </div>
        <ul class="c-site-header__menu__list">
          <li><router-link :to="{ name: 'services' }">Servicios</router-link></li>
          <li><router-link :to="{ name: 'work' }">Trabajo</router-link></li>
          <li><router-link :to="{ name: 'process' }">Proceso</router-link></li>
          <!-- <li><router-link :to="{ name: '' }">Cultura</router-link> -->
          <li><router-link :to="{ name: 'contact' }">Contacto</router-link></li>
          <!-- <li><a href="">ES</a> / <a href="">EN</a></li> -->
        </ul>
      </div>
    </div>
    <div
      class="c-site-header__overlay u-padding-top-large"
      :style="{ display: menuOpen ? 'block' : '' }">
      <div class="o-wrapper">
        <ul class="c-site-header__overlay__list">
          <li>
            <router-link
              class="u-h2"
              :to="{ name: 'work'}">Trabajo</router-link>
          </li>
          <li>
            <router-link
              class="u-h2"
              :to="{ name: 'services'}">Servicios</router-link>
          </li>
          <li>
            <router-link
              class="u-h2"
              :to="{ name: 'process'}">Proceso</router-link>
          </li>
          <li>
            <router-link
              class="u-h2"
              :to="{ name: 'contact'}">Contacto</router-link>
          </li>
        </ul>
        <ul class="o-list-bare u-text-blue">
          <li class="o-list-bare__item">
            <span>hello@devianlabs.com</span>
          </li>
          <li class="o-list-bare__item">
            <span>(+52) 81 2474 7111</span>
          </li>
        </ul>
        <p>///</p>
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

  // props: {
  //   showBackground: Boolean,
  // },

  data() {
    return {
      darkText: false,
      headerOffset: null,
      showBackground: false,
      menuOpen: false,
    };
  },

  watch: {
    $route() {
      this.menuOpen = false;
    },

    menuOpen() {
      console.log(this.menuOpen);
    },
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
