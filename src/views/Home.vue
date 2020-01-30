<template>
  <div class="home">
    <page-template>
      <div slot="sidebar">
        <home-sidebar />
      </div>
      <div slot="content">
        <div class="home__hero">
          <img class="home__hero-background-image" src="../assets/Logos/block-s.svg" alt=""/>
          <div class="home__hero-title-container">
            <h1 class="home__hero-title-heading">Design System</h1>
          </div>
        </div>
        <div class="home__content">
          <h2>Welcome to OrangeCSS</h2>
        </div>
      </div>
    </page-template>
  </div>
</template>

<script>
import PageTemplate from '../components/Base/page-template.vue';
import HomeSidebar from '../components/Sidebars/home-sidebar.vue';

export default {
  name: 'home',
  components: {
    PageTemplate,
    HomeSidebar,
  },
};
</script>

<style lang="scss">
  .home {
    height: 100%;
    &__hero {
      background: $su-blue-primary-100;
      height: 50vh;
      position: relative;
      overflow: hidden;
      &-background-image {
        height: 100%;
        position: absolute;
        right: -55px;
        top: 45px;
      }
      &-title-heading {
        color: $white;
        font-weight: 500;
      }
    }
    &__content {
      padding: $spacer-4;
    }
  }
</style>
