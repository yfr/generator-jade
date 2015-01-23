/**
 * grunt-bump options
 * @type {Object}
 */

module.exports = {
  options: {
    files: ['package.json'],
    commitFiles: ['CHANGELOG.md', 'package.json'],
    pushTo: 'origin'
  }
};
