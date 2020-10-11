<template>
  <div class="category__wrapper">
    <ul class="category__wrapper__list">
      <li
        class="category__wrapper__list__item"
        v-for="(item, index) in node" :key="item.name"
        @mouseover="mouseOver({index: index, url: item.absolute_url})"
      >
        <nuxt-link
          :to="item.absolute_url"
          class="category__wrapper__list__item-link"
        >
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CatalogPageCategory',
  props: {
    node: Array,
  },
  methods: {
    mouseOver(data) {
      this.$emit('mouseOver', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.category__wrapper {
  &__list {
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
      &-link {
        display: block;
        width: 100%;
        height: 100%;
        padding: 8px;

        &:hover {
          color: white;
          cursor: pointer;
          background-color: blue;
        }
      }
    }
  }
}
</style>
