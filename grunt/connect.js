module.exports = {
  server: {
    options: {
      port: 9001,
      hostname: 'localhost',
      base: ['<%= paths.tmp %>', '<%= paths.src %>'],
      livereload: true,
      open: 'http://localhost:9001',
      keepalive: true
    }
  }
};
