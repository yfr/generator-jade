/**
 * grunt-contrib-htmlmin options
 * @type {Object}
 */

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= folders.tmp %>',
      src: '{,*/}*.html',
      dest: '<%= folders.dist %>'
    }]
  }
};
