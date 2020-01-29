<template>
    <div class="page-sidebar">
        Test
    </div>
</template>

<style lang="scss">
    .page-sidebar {
        width: 0;
        height: 0;
        background-color: $su-gray-light-20;
        overflow: hidden;
        @include breakpoint(md) {
            width: 350px;
            border-right: $border-width $border-style $border-color;
            height: 100%;
            padding: $spacer-4;
        }
    }
</style>
