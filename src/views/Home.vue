<template>
  <v-site-layout>

    <!-- intro -->
    <div class="c-bg-img" :style="`background-image: url(${banner});`">
      <div class="o-wrapper c-site-section u-padding-vertical-huge u-text-white">
        <div class="o-layout">
          <div
            class="o-layout__item u-push-1/3@desktop u-1/3@desktop u-push-1/3@tablet u-1/3@tablet">
            <h1 class="u-h6">SOFTWARE DEVELOPMENT <br> & DIGITAL DESIGN </h1>
            <p class="u-hbig">
              Impulsamos negocios construyendo las mejores experiencias digitales
            </p>
            <span class="u-h1">////</span>
          </div>
        </div>
      </div>
    </div>

    <!-- brief -->
    <div class="c-site-section c-site-section--gray-bg1 light">
      <div class="o-wrapper u-padding-vertical-huge">
        <div class="o-layout">
          <div class="o-layout__item u-1/2@desktop u-push-1/3@desktop">
            <h2 class="u-h1">Software de valor</h2>
            <p>
              Somos un equipo de desarrolladores de software y diseñadores digitales, apasionados por la tecnología, los retos y la innovación.
            </p>
            <p>
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
              <b>contruímos plataformas de software escalables, progresivas y dirigidas por el valor.</b>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- services -->
    <div class="c-site-section c-site-section--gray-bg1 light">
      <div class="o-wrapper u-padding-vertical-huge">
        <h2 class="u-h1">Servicios</h2>
        <!-- boxes -->
        <div class="c-boxes-bg u-padding-vertical">
          <div
            v-for="service in services"
            :key="service.key"
            class="c-boxes-bg__item u-1/4@desktop u-1/2@tablet u-margin-bottom"
            @click="$router.push({ path: `/services#${service.key}` })">
            <div class="c-box-bg" style="background-color: #1023FA;">
              <div class="c-box-bg__title">
                <span class="u-hhuge">{{ service.number }}</span>
              </div>
              <div class="c-box-bg__subtitle">
                <span class="u-h3">{{ service.title }}</span>
              </div>
              <div class="c-box-bg__plain-overlay">
                <span class="u-hbig">-></span>
              </div>
            </div>
          </div>
        </div>

        <div class="o-layout u-padding-vertical">
          <div class="o-layout__item u-1/2@desktop">
            <p> 
              Desde startups, pymes, hasta grandes empresas, <b>aumentamos capacidades de tecnología creando software a la medida</b>
              para impulsar los objetivos de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- work -->
    <div class="c-site-section c-site-section--gray-bg1 light">
      <div class="o-wrapper u-padding-vertical-large">
        <div class="o-layout u-margin-bottom">
          <div class="o-layout__item u-1/2">
            <h2 class="u-h1">Nuestro trabajo</h2>
          </div>
          <div class="o-layout__item u-1/2 u-text-align-right">
            <span class="u-padding-horizontal">
              <router-link
                :to="{ name: 'work' }"
                class="u-text-blue" href="">
                Ver portafolio ->
              </router-link>
            </span>
          </div>
        </div>
        <div class="o-layout">
          <div class="o-layout__item u-1/2@desktop u-margin-bottom">
            <div class="c-box-bg u-unpad">
              <div class="c-box-bg__title">
                <!-- TODO: refactor -->
                <span class="u-h2">Junkcel</span>
              </div>
              <div class="c-box-bg__rich-overlay u-padding u-text-lightgray">
                <p>
                  <!-- refactor -->
                  <span class="u-h2 u-text-blue">Junkcel</span>
                  <br>
                  <span>Web application</span>
                  <br>
                  <span>- - - -</span>
                </p>
                <p>
                  <b>Marketplace B2B para el intercambio de piezas de yonke para negocios de repación de gadgets.</b>
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
              <img src="../assets/images/junkcel/junkcel-cover.png" alt="">
            </div>
          </div>
          <div class="o-layout__item u-1/2">
            <div class="c-box-bg u-unpad">
              <div class="c-box-bg__title">
                <!-- TODO: refactor -->
                <!-- project title here -->
                <!-- <span class="u-h2"></span> -->
              </div>
              <!-- project description -->
              <!-- <div class="c-box-bg__rich-overlay u-padding u-text-lightgray"></div> -->
              <img src="../assets/images/sherlock/sherlock-01.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c-site-section c-site-section--gray-bg1 light">
      <div class="o-wrapper u-padding-vertical-huge">
        <div class="o-layout">
          <div class="o-layout__item u-1/2@desktop u-push-1/3@desktop">
            <h2 class="u-h1">Nuestro enfoque</h2>
            <p>
              Trabajamos in-house y de tiempo completo en cada uno de nuestros proyectos.
            </p>
            <p>
              Acompañamos a nuestros clientes en la <b>construcción de un nuevo producto de software,
              durante una migración,
              o bien, al habilitar nuevas tecnologías</b> dentro de sus negocios.
            </p>
            <p>
              Durante el
              <router-link
                :to="{ name: 'process' }"
                class="u-text-blue u-underline" href="">proceso</router-link>,
              promovemos la transparencia,
              la colaboración, y una constante comunicación.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- clients -->
    <div class="c-site-section c-site-section--gray-bg1 light">
      <div class="o-wrapper u-padding-vertical-huge">
        <div class="u-text-align-center">
          <h2 class="u-h6"><b>ELLOS CONFÍAN EN NOSOTROS</b></h2>
        </div>
        <div class="o-layout u-padding-vertical">
          <div
            v-for="client in clients"
            :key="client.name"
            class="o-layout__item u-1/5@desktop u-1/3@tablet u-1/2@mobile u-margin-bottom">
            <div class="c-box-bg c-box-bg--small" style="background-color: #032329;">
              <img :src="getClientImage(client.img)" alt="">
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

  data() {
    return {
      services: [{
        number: '01',
        title: 'Product Development',
        key: 'productdevelopment',
      }, {
        number: '02',
        title: 'Web & mobile Development',
        key: 'webandmobile',
      }, {
        number: '03',
        title: 'Digital Design',
        key: 'digitaldesign',
      }, {
        number: '04',
        title: 'Cloud-native Development',
        key: 'devops',
      }],
      clients: [{
        name: 'Aleph5',
        img: 'logo-aleph@3x.png',
      }, {
        name: 'UANL',
        img: 'logo-uanl@3x.png',
      }, {
        name: 'Cuprum',
        img: 'logo-cuprum@3x.png',
      }, {
        name: 'Junkcel',
        img: 'logo-junkcel@3x.png',
      }, {
        name: 'Aviva',
        img: 'logo-aviva@3x.png',
      }],
    };
  },

  computed: {
    banner() {
      return require('@/assets/images/bg.jpg');
    },
  },

  methods: {
    getClientImage(imgName) {
      return require(`../assets/images/clients/${imgName}`);
    },
  },
};
</script>
