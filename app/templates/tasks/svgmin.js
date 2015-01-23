/**
 * grunt-svgmin options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/images',
      src: '{,*/}*.svg',
      dest: '<%= folders.dist %>/images'
    }]
  }
};
