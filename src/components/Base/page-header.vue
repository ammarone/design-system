<template>
    <header class="page-header">
        <div class="page-header__title">
            <router-link :to="{name: 'home'}" class="page-header__brand">
                <span class="is-primary">Orange</span>CSS
            </router-link>
        </div>
    </header>
</template>

<style lang="scss">
    .page-header {
        position: relative;
        width: 100%;
        height: 7.5rem;
        color: $text-white;
        @include flex-row-align-center;
        padding: 0 $spacer-4;
        &__title {
            font-size: $text-size-6;
            font-weight: $font-weight-bold;
            color: $text-blue;
            letter-spacing: .25rem;
        }
        &__brand {
            text-decoration: none;
            color: inherit;
        }
    }
</style>
