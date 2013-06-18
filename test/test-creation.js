/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('jade generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('jade:app', [
        '../../app'
      ]);

      done();
    }.bind(this));


  });

  it('creates expected files', function (done) {
    var expected = [
      'app',
      'app/jade',
      'app/jade/layouts',
      'app/assets',
      'app/images',
      'app/scripts',
      'app/styles'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': 'test'
    });

    this.app.options['skip-install'] = true;

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected project files', function (done) {
    var expected = [
      'bower.json',
      '.bowerrc',
      'package.json',
      'Gruntfile.js',
      'app/styles/main.sass',
      'app/scripts/main.js'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': 'test'
    });

    this.app.options['skip-install'] = true;

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('creates expected jade files', function (done) {
    var expected = [
      'app/jade/index.jade',
      'app/jade/layouts/_default.jade',
      'app/jade/layouts/partials/_html-header.jade',
      'app/jade/layouts/partials/_nav.jade',
      'app/jade/layouts/partials/_footer.jade'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': 'test'
    });

    this.app.options['skip-install'] = true;

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});