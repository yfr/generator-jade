module.exports = {
  build: {
    files: [{
      dot: true,
      src: [
        '<%= folders.tmp %>',
        '<%= folders.dist %>/*',
        '!<%= folders.dist %>/.git*'
      ]
    }]
  },
  server: '<%= folders.tmp %>'
};
