<template>
  <div class="catalog-page-container">
    <slot />
  </div>
</template>

<script>

</script>

<style lang="scss" scope>
.catalog-page-container {
  max-width: $container-xl;
  padding: 0 8px;
  margin: 0 auto;

  @media (min-width: $screen-lg) {
    padding: 0 16px;
  }

  @media (min-width: $screen-xl) {
    padding: 0 84px;
  }
}
</style>
