<template>
    <header class="page-header">
        <div class="page-header__title">
            OrangeCSS
        </div>
    </header>
</template>

<style lang="scss">
    .page-header {
        position: relative;
        width: 100%;
        height: 5rem;
        background-color: $bg-blue;
        color: $text-white;
        @include flex-row-align-center;
        border-bottom: 5px $border-style $su-orange-primary-100;
        padding: 0 $spacer-4;
       box-shadow: 0px 4px 8px 0px rgba(71, 71, 71, 0.59);
        &__title {
            font-size: $text-size-6;
            color: $text-white;
            letter-spacing: .25rem;
        }
    }
</style>
