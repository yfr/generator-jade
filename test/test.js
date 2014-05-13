/* global describe, beforeEach, it */

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');


describe('Webapp generator test', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.webapp = helpers.createGenerator('jade:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));
  });

  it('the generator can be required without throwing', function() {
    // not testing the actual run of generators yet
    this.app = require('../app');
  });

  it('creates expected files in stylus mode', function(done) {
    var expected = [
      'bower.json',
      'package.json',
      'Gruntfile.js',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'app/jade/layouts/_default.jade',
      'app/jade/index.jade',
      'app/styles/main.styl',
      'app/scripts/main.js'
    ];

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'stylus'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates expected files in sass mode', function(done) {
    var expected = [
      'bower.json',
      'package.json',
      'Gruntfile.js',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'app/jade/layouts/_default.jade',
      'app/jade/index.jade',
      'app/styles/main.sass',
      'app/scripts/main.js'
    ];

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'sass'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates expected files in css mode', function(done) {
    var expected = [
      'bower.json',
      'package.json',
      'Gruntfile.js',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'app/jade/layouts/_default.jade',
      'app/jade/index.jade',
      'app/styles/main.css',
      'app/scripts/main.js'
    ];

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'css'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertFile(expected);
      done();
    });
  });
});
