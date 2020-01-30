<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  height: 100%;
  overflow: hidden;
  background-color: $su-gray-light-20;
}
</style>
