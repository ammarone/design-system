<template>
    <div class="page-template">
        <page-header />
        <div class="page-template__container">
            <page-sidebar />
            <main class="page-template__content">
                <slot name="content" />
            </main>
        </div>
    </div>
</template>

<script>
import PageHeader from './page-header.vue';
import PageSidebar from './page-sidebar.vue';


export default {
  name: 'home',
  components: {
    PageHeader,
    PageSidebar,
  },
};
</script>

<style lang="scss">
    .page-template {
        height: 100%;
        &__container {
            @include breakpoint(md){
                @include flex-row-nowrap;
                height: 100%;
            }
        }
        &__content {
            padding: $spacer-4;
            width: 100%;
            overflow-y: scroll;
        }
    }
</style>
