/**
 * grunt-usemin options
 * @type {Object}
 */

module.exports = {
  html: ['<%= folders.dist %>/{,*/}*.html'],
  css: ['<%= folders.dist %>/styles/{,*/}*.css'],
  options: {
    dirs: ['<%= folders.dist %>']
  }
};
