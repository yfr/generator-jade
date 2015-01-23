/**
 * grunt-useminPrepare options
 * @type {Object}
 */

module.exports = {
  html: '<%= folders.tmp %>/index.html',
  options: {
    dest: '<%= folders.dist %>'
  }
};
