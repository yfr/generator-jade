/**
 * grunt-contrib-watch options
 * @type {Object}
 */

module.exports = {
  server: {
    options: {
      livereload: true
    },
    files: [
      '<%= folders.tmp %>/*.html',
      '<%= folders.tmp %>/styles/{,*/}*.css',
      '{.tmp,<%= folders.app %>}/scripts/{,*/}*.js',
      '<%= folders.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  },
  jade: {
    files: '<%= folders.app %>/jade/**/*.jade',
    tasks: ['jade']
  },
  stylus: {
    files: '<%= folders.app %>/styles/**/*.styl',
    tasks: ['stylus', 'autoprefixer']
  }
};
