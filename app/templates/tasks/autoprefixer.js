/**
 * grunt-autoprefixer options
 * @type {Object}
 */

module.exports = {
  options: {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= folders.tmp %>/styles',
      dest: '<%= folders.tmp %>/styles',
      src: '{,*/}*.css'
    }]
  }
};
