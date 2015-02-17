module.exports = {
  dev: {
    files: {
      "<%= paths.tmp %>/js/the.js": "<%= paths.src %>/js/the.js"
    },
    options: {
      watch: true,
      keepAlive: true,
      browserifyOptions: {
         debug: true
      }
    }
  }
};
