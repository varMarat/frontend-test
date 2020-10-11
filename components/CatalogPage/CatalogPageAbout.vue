<template>
  <CatalogPageContainer>
    <div class="wrapper">
      <div class="wrapper__inner">
        <CatalogPageCategory
          :node="tree"
          @mouseOver="getCategoryData"
        />
      </div>
      <div class="wrapper__inner">
        <CatalogPageCategory
          :node="tree2"
          @mouseOver="getCategoryData"
        />
      </div>
      <div class="wrapper__inner">
        <CatalogPageCategory
          :node="tree3"
        />
      </div>
    </div>
  </CatalogPageContainer>
</template>

<script>
import CatalogPageContainer from '~/components/CatalogPage/common/CatalogPageContainer.vue';
import CatalogPageCategory from '~/components/CatalogPage/CatalogPageCategory.vue';

export default {
  components: {
    CatalogPageContainer,
    CatalogPageCategory,
  },
  data() {
    return {
      tree: [],
      tree2: [],
      tree3: [],
    };
  },
  async beforeMount() {
    const response = await fetch('https://web.gdml.ru/api/v1/categories_tree/');
    const tree = await response.text();
    this.tree = JSON.parse(tree);
  },
  methods: {
    getCategoryData(data) {
      const depth = data.url.split('/').length - 1;
      if (depth === 3) {
        this.tree2 = this.tree[data.index].submenu;
        this.tree3 = [];
      } else if (depth === 4) {
        this.tree3 = this.tree2[data.index].submenu;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  height: 750px;
  background-color: $white;
  border-radius: 10px;
  box-shadow: 0 3px 8px $gray-semidark;

  &__inner {
    width: 33.33%;
    overflow: auto;
    border-right: 1px solid $gray;

    &:last-child {
      border-right: none;
    }
  }
}
</style>
