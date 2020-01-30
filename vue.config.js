module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import '~@/scss/main.scss';
        @import '~@/scss/design-system.scss';
        `,
      },
    },
  },
};
