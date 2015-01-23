/**
 * grunt-contrib-connect options
 * @type {Object}
 */

module.exports = {
  options: {
    port: 9000,
    // change this to '0.0.0.0' to access the server from outside
    hostname: '0.0.0.0',
    livereload: true
  },
  server: {
    options: {
      open: true,
      base: [
        '<%= folders.tmp %>',
        '<%= folders.app %>'
      ]
    }
  },
  test: {
    options: {
      base: [
        '<%= folders.tmp %>',
        'test',
        '<%= folders.app %>'
      ]
    }
  },
  dist: {
    options: {
      open: true,
      base: [
        '<%= folders.dist %>'
      ],
      livereload: false
    }
  }
};
