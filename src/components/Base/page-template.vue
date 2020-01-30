<template>
    <div class="page-template">
        <page-header />
        <div class="page-template__container">
            <aside class="page-template__sidebar">
                <slot name="sidebar" />
            </aside>
            <main class="page-template__content">
                <div class="page-template__content-container">
                    <slot name="content" />
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import PageHeader from './page-header.vue';


export default {
  name: 'home',
  components: {
    PageHeader,
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
        &__sidebar {
            width: 0;
            height: 0;
            overflow: hidden;
            @include breakpoint(md) {
                width: 350px;
                height: 100%;
                padding: $spacer-4;
            }
        }
        &__content {
            padding: $spacer-4;
            width: 100%;
            overflow-y: scroll;
            @include breakpoint(md){
                padding: $spacer-6;
            }
            &-container {
                background-color: $white;
                border-radius: 4px;
                overflow: hidden;
                box-shadow: $box-shadow-secondary;
            }
        }
    }
</style>
