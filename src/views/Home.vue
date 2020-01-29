<template>
  <div class="home">
    <page-template>
      <div slot="content">
        <div class="home__hero">
          <img class="home__hero-background-image" src="../assets/Logos/block-s.svg" alt=""/>
          <div class="home__hero-title-container">
            <h1 class="home__hero-title-heading">Design System</h1>
          </div>
        </div>
      </div>
    </page-template>
  </div>
</template>

<script>
import PageTemplate from '../components/Base/page-template.vue';

export default {
  name: 'home',
  components: {
    PageTemplate,
  },
};
</script>

<style lang="scss">
  .home {
    height: 100%;
    &__hero {
      background: $su-blue-primary-100;
      margin-left: -$spacer-4;
      margin-right: -$spacer-4;
      margin-top: -$spacer-4;
      height: 75vh;
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
  }
</style>
