/* global describe, beforeEach, it */

var path = require('path'),
  helpers = require('yeoman-generator').test;

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

  it('creates expected ".gitignore" content in stylus mode', function(done) {
    var expected = /.*\s\n/g,
      file = '.gitignore';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'stylus'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertNoFileContent(file, expected);
      done();
    });
  });

  it('creates expected ".gitignore" content in sass mode', function(done) {
    var expected = /.*\s\n/g,
      file = '.gitignore';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'sass'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertNoFileContent(file, expected);
      done();
    });
  });

  it('creates expected ".gitignore" content in css mode', function(done) {
    var expected = /.*\s\n/g,
      file = '.gitignore';

    helpers.mockPrompt(this.webapp, {
      cssProcessor: 'css'
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertNoFileContent(file, expected);
      done();
    });
  });

  it(
    'autoprefixer is not added to package.json if not selected',
    function(done) {
      var expected = /autoprefixer/g,
        file = 'package.json';

      helpers.mockPrompt(this.webapp, {
        autoprefixer: false
      });

      this.webapp.options['skip-install'] = true;

      this.webapp.run({}, function() {
        helpers.assertNoFileContent(file, expected);
        done();
      });
    });

  it('autoprefixer is added to package.json if selected', function(done) {
    var expected = /autoprefixer/g,
      file = 'package.json';

    helpers.mockPrompt(this.webapp, {
      autoprefixer: true
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertFileContent(file, expected);
      done();
    });
  });
});
