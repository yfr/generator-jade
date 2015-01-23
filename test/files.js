/* global describe, beforeEach, it */

var path = require('path'),
  helpers = require('yeoman-generator').test,
  baseFileList = [];

describe('Jade generator test', function() {
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

      baseFileList = [
        'bower.json',
        'package.json',
        'Gruntfile.js',
        '.editorconfig',
        '.gitignore',
        '.jshintrc',
        'CONVENTIONS.md',
        'app/jade/layouts/_default.jade',
        'app/jade/index.jade',
        'app/scripts/main.js',
        'tasks/aliases.yaml',
        'tasks/bump.js',
        'tasks/changelog.js',
        'tasks/clean.js',
        'tasks/connect.js',
        'tasks/copy.js',
        'tasks/htmlmin.js',
        'tasks/imagemin.js',
        'tasks/jade.js',
        'tasks/rev.js',
        'tasks/stylus.js',
        'tasks/svgmin.js',
        'tasks/usemin.js',
        'tasks/useminPrepare.js',
        'tasks/watch.js'
      ];
      done();
    }.bind(this));
  });

  it('creates expected files in stylus mode', function(done) {
    var expected = baseFileList;
    expected.push('app/styles/main.styl');

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'stylus'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates expected files in sass mode', function(done) {
    var expected = baseFileList;
    expected.push('app/styles/main.sass');

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'sass'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates expected files in css mode', function(done) {
    var expected = baseFileList;
    expected.push('app/styles/main.css');

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'css'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertFile(expected);
      done();
    });
  });
  it('creates autoprefixer in stylus mode', function(done) {
    var expected = 'tasks/autoprefixer.js';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'stylus',
      autoprefixer: true
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates autoprefixer in sass mode', function(done) {
    var expected = 'tasks/autoprefixer.js';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'sass',
      autoprefixer: true
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates autoprefixer in css mode', function(done) {
    var expected = 'tasks/autoprefixer.js';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'css',
      autoprefixer: true
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertFile(expected);
      done();
    });
  });

  it('doesn\'t creates autoprefixer in stylus mode', function(done) {
    var expected = 'tasks/autoprefixer.js';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'stylus',
      autoprefixer: false
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertNoFile(expected);
      done();
    });
  });

  it('doesn\'t creates autoprefixer in sass mode', function(done) {
    var expected = 'tasks/autoprefixer.js';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'sass',
      autoprefixer: false
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run( function() {
      helpers.assertNoFile(expected);
      done();
    });
  });

  it('doesn\'t creates autoprefixer in css mode', function(done) {
    var expected = 'tasks/autoprefixer.js';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'css',
      autoprefixer: false
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run(function() {
      helpers.assertNoFile(expected);
      done();
    });
  });
});
