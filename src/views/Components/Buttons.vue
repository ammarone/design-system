<template>
  <div class="design">
    <page-template>
      <div slot="sidebar">
        <home-sidebar />
      </div>
      <div slot="content">
        <div class="design__content">
          <h2>Buttons</h2>
        </div>
      </div>
    </page-template>
  </div>
</template>

<script>
import PageTemplate from '../../components/Base/page-template.vue';
import HomeSidebar from '../../components/Sidebars/home-sidebar.vue';

export default {
  name: 'home',
  components: {
    PageTemplate,
    HomeSidebar,
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
