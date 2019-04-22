<template>
  <div>
    <v-header />
    <div>
      <slot>
        <!-- content here -->
      </slot>
    </div>
    <v-footer />
  </div>
</template>
<script>
import VHeader from '@/components/Header.vue';
import VFooter from '@/components/Footer.vue';

export default {
  /**
  * NAME
  */
  name: 'SiteLayout',

  /**
   * COMPONENTS
   */
  components: {
    VHeader,
    VFooter,
  },
};
</script>
