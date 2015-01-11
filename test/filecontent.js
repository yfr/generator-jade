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

  it('should add .sass-cache to .gitignore if sass is selected',
    function(done) {
      var expected = /\.sass-cache/g,
        file = '.gitignore';

      helpers.mockPrompt(this.webapp, {
        cssProcessor: 'sass'
      });

      this.webapp.options['skip-install'] = true;

      this.webapp.run({}, function() {
        helpers.assertFileContent(file, expected);
        done();
      });
    });

  it('sould not add autoprefixer to package.json if selected',
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

  it('sould add autoprefixer to package.json if selected', function(done) {
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

  it('should not add jQuery to bower.json', function(done) {
    var expected = /jquery/g,
      file = 'bower.json';

    helpers.mockPrompt(this.webapp, {
      jquery: false
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertNoFileContent(file, expected);
      done();
    });
  });

  it('should add jQuery to bower.json', function(done) {
    var expected = /jquery/g,
      file = 'bower.json';

    helpers.mockPrompt(this.webapp, {
      jquery: true
    });

    this.webapp.options['skip-install'] = true;

    this.webapp.run({}, function() {
      helpers.assertFileContent(file, expected);
      done();
    });
  });
});
