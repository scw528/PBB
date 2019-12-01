module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      scss: {
        data: `
          @import "../src/scss/styles.scss";
        `
      }
    }
  }
  
}