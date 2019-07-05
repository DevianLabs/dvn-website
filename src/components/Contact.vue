<template>
  <div class="c-site-section c-site-section--white light">
    <div class="o-wrapper u-padding-vertical-huge">
      <p class="u-h1">¡Cuéntanos sobre tu proyecto!</p>
      <div class="o-layout">
        <div class="o-layout__item u-1/2@desktop">
          <p class="u-text-darkgray">
            Ponte en contacto con nosotros y conoce todas las formas en las que podemos colaborar.
          </p>
        </div>
        <div class="o-layout__item">
          <button
            @click="goForm()"
            class="c-btn u-margin-vertical">
            <span>COMENZAR</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contact',

  methods: {
    goForm() {
      window.open('https://devianlabs.typeform.com/to/Api4jA', '_blank');
    },
  },
};
</script>
