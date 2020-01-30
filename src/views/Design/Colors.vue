<template>
  <div class="design">
    <page-template>
      <div slot="sidebar">
        <design-sidebar />
      </div>
      <div slot="content">
        <div class="design__content">
          <h2>Design</h2>
        </div>
      </div>
    </page-template>
  </div>
</template>

<script>
import PageTemplate from '../../components/Base/page-template.vue';
import DesignSidebar from '../../components/Sidebars/design-sidebar.vue';

export default {
  name: 'home',
  components: {
    PageTemplate,
    DesignSidebar,
  },
};
</script>

<style lang="scss">
  .design {
    height: 100%;
    &__content {
      padding: $spacer-4;
    }
  }
</style>
