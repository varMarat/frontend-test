<template>
  <section class="catalog-page">
    <CatalogPageAbout />
  </section>
</template>

<script>
import CatalogPageAbout from '~/components/CatalogPage/CatalogPageAbout.vue';

export default {
  components: {
    CatalogPageAbout,
  },
};
</script>

<style lang="scss" scoped>
.catalog-page {
  height: 700px;
  font-family: $font-family-montserrat;
  background-color: hsl(216, 56%, 98%);

  @media (min-width: $screen-lg) {
    // padding: 0 0 80px 0;
  }
}
</style>
