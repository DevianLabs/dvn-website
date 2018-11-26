<template>
  <div class="c-hero">
    <header class="c-hero__header">
      <div class="o-wrapper">
        <p>
          <!-- header -->
        </p>
      </div>
    </header>
    <section class="c-hero__content">
      <div class="o-wrapper">
        <slot>
          <!-- content goes here -->
        </slot>
      </div>
    </section>
    <footer class="c-hero__footer">
      <div class="c-hero__footer__info">
        <span>2019</span>
        <br>
        <small>Devian Labs S. de R.L. de C.V.</small>
      </div>
      <div class="c-hero__footer__image">
        <!-- footer -->
      </div>
    </footer>
  </div>
</template>

<script>
/* ============
 * Hero Layout
 * ============
 */
export default {
  name: 'Hero',
};
</script>
