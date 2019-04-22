<template>
  <v-site-layout>

    <!-- intro -->
    <div class="c-bg-img" :style="`background-image: url(${banner});`">
      <div class="c-site-section u-padding-vertical-huge u-text-white">
        <div class="o-layout">
          <div class="o-layout__item u-1/3 u-push-1/3">
            <h1 class="u-h6">SOFTWARE DEVELOPMENT <br> & DIGITAL DESIGN </h1>
            <p class="u-hbig">Transformamos negocios construyendo las mejores experiencias digitales</p>
            <span class="u-h1">////</span>
          </div>
        </div>
      </div>
    </div>

    <!-- brief -->
    <div class="c-site-section c-site-section--gray1 light">
      <div class="o-wrapper u-padding-vertical-huge">
        <div class="o-layout">
          <div class="o-layout__item u-2/4 u-push-1/4">
            <h2 class="u-h1">En Devian</h2>
            <p class="">
              Somos un equipo apasionado por la tecnología, los retos y la innovación.
            </p>
            <div class="">
              A través del
              <router-link
                :to="{ name: 'services' }"
                class="u-underline u-text-blue" href="">diseño centrado en el usuario</router-link>,
              las mejores prácticas de
              <router-link
                :to="{ name: 'services' }"
                class="u-text-blue u-underline" href="">ingeniería de software</router-link>,
              y <router-link
                  :to="{ name: 'services' }"
                  class="u-text-blue u-underline" href="">un enfoque Lean</router-link> para el desarrollo de productos,
              <b>contruímos plataformas de software progresivas, escalables y dirigidas por el valor.</b>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- work -->
    <div class="c-site-section c-site-section--gray1 light">
      <div class="o-wrapper u-padding-vertical">
        <div class="o-layout u-padding-bottom">
          <div class="o-layout__item u-1/2">
            <router-link
              :to="{ name: 'work' }"
              class="u-text-blue" href="">
              Ver casos de estudio ->
            </router-link>
          </div>
        </div>
        <div class="o-layout">
          <div class="o-layout__item u-1/2">
            <div class="c-box c-box--big u-unpad">
              <div class="c-box__title">
                <!-- refactor -->
                <span class="u-h2">Junkcel</span>
              </div>
              <div class="c-box__rich-overlay u-padding u-text-lightgray">
                <p>
                  <!-- refactor -->
                  <span class="u-h2 u-text-blue">Junkcel</span>
                  <br>
                  <span>Web application</span>
                  <br>
                  <span>- - - -</span>
                </p>
                <p>
                  <b>Marketplace B2B para compra-venta de piezas de gadgets de yonke.</b>
                </p>
                <div class="u-text-blue u-underline">
                  <ul class="o-list-bare">
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">brand identity</small>
                    </li>
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">ui/ux design</small>
                    </li>
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">front-end</small>
                    </li>
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">back-end</small>
                    </li>
                  </ul>
                </div>
              </div>
              <img src="../assets/images/junkcel-01-blue.png" alt="">
            </div>
          </div>
          <div class="o-layout__item u-1/2">
            <div class="c-box c-box--big u-unpad">
              <div class="c-box__title">
                <!-- refactor -->
                <span class="u-h2">Sherlock</span>
              </div>
              <div class="c-box__rich-overlay u-padding u-text-lightgray">
                <p>
                  <!-- refactor -->
                  <span class="u-h2 u-text-blue">Sherlock</span>
                  <small> / Aleph5</small>
                  <br>
                  <span>Web application</span>
                  <br>
                  <span>- - - -</span>
                </p>
                <p>
                  <b>Plataforma de inteligencia analítica capaz de recolectar,
                    comunicar e interpretar datos a través de agentes autónomos.</b>
                </p>
                <br>
                <div class="u-text-blue u-underline">
                  <ul class="o-list-bare">
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">ui/ux design</small>
                    </li>
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">design system</small>
                    </li>
                    <li class="o-list-bare__item">
                      <small class="u-margin-right">front-end</small>
                    </li>
                  </ul>
                </div>
              </div>
              <img src="../assets/images/sherlock-01.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- services -->
    <div class="c-site-section c-site-section--gray1 light">
      <div class="o-wrapper u-padding-vertical-huge">
        <h2 class="u-h1">Servicios</h2>
        <div class="o-layout">
          <div class="o-layout__item u-1/2">
            <p> 
              Trabajamos in-house y de tiempo completo en cada uno de nuestros proyectos.
              <b>Desde startups hasta grandes empresas</b>, aumentamos capacidades de tecnología para nuestros clientes y sus objetivos.
            </p>
          </div>
        </div>
        <div class="o-layout u-padding-vertical">
          <div class="o-layout__item u-1/4">
            <div class="c-box" style="background-color: #1023FA;">
              <div class="c-box__title">
                <span class="u-hhuge">01</span>
              </div>
              <div class="c-box__subtitle">
                <span class="u-h3">Cloud-native Development</span>
              </div>
              <div class="c-box__plain-overlay">
                <span class="u-hbig">-></span>
              </div>
            </div>
          </div>
          <div class="o-layout__item u-1/4">
            <div class="c-box" style="background-color: #1023FA;">
              <div class="c-box__title">
                <span class="u-hhuge">02</span>
              </div>
              <div class="c-box__subtitle">
                <span class="u-h3">Web & Mobile Development</span>
              </div>
              <div class="c-box__plain-overlay">
                <span class="u-hbig">-></span>
              </div>
            </div>
          </div>
          <div class="o-layout__item u-1/4">
            <div class="c-box" style="background-color: #1023FA;">
              <div class="c-box__title">
                <span class="u-hhuge">03</span>
              </div>
              <div class="c-box__subtitle">
                <span class="u-h3">Digital Design</span>
              </div>
              <div class="c-box__plain-overlay">
                <span class="u-hbig">-></span>
              </div>
            </div>
          </div>
          <div class="o-layout__item u-1/4">
            <div class="c-box" style="background-color: #1023FA;">
              <div class="c-box__title">
                <span class="u-hhuge">04</span>
              </div>
              <div class="c-box__subtitle">
                <span class="u-h3">Data Engineering</span>
              </div>
              <div class="c-box__plain-overlay">
                <span class="u-hbig">-></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- contact form -->
    <v-contact />

  </v-site-layout>
</template>
<script>
import VSiteLayout from '@/layouts/Site.vue';
import VContact from '@/components/Contact.vue';

export default {
  /**
  * COMPONENT NAME
   */
  name: 'Home',

  /**
  * RELATED COMPONENTS
   */
  components: {
    VSiteLayout,
    VContact,
  },

  computed: {
    banner() {
      return require('@/assets/images/bg.jpg');
    },
  },
};
</script>
