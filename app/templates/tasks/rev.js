/**
 * grunt-rev options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: {
      src: [
        '<%= folders.dist %>/scripts/{,*/}*.js',
        '<%= folders.dist %>/styles/{,*/}*.css',
        '<%= folders.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        '<%= folders.dist %>/styles/fonts/*'
      ]
    }
  }
};
