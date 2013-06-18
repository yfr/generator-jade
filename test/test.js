/*global describe, beforeEach, it*/

var path    = require('path');
var helpers = require('yeoman-generator').test;
var assert  = require('assert');


describe('Webapp generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
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

  it('the generator can be required without throwing', function () {
    // not testing the actual run of generators yet
    this.app = require('../app');
  });

  it('creates expected files', function (done) {
    var expected = [
      'bower.json',
      'package.json'
    ];

    helpers.mockPrompt(this.webapp, {
      'compassBootstrap': 'Y',
      'includeRequireJS': 'N',
      'autoprefixer': 'N'
    });

    this.webapp.options['skip-install'] = true;
    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});