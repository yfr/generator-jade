'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var JadeGenerator = module.exports = function JadeGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JadeGenerator, yeoman.generators.Base);

JadeGenerator.prototype.askFor = function askFor() {
  var cb = this.async(),
    welcomeMsg = 'You are running generator-jade version: ' + this.pkg.version;

  console.log(welcomeMsg);

  var prompts = [
    {
      name: 'projectName',
      message: 'Name your project'
    }, {
      type: 'list',
      name: 'cssProcessor',
      message: 'Do you like sass/compass or stylus as a css preprocessor',
      choices: ['stylus', 'sass']
    }
  ];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.cssProcessor = props.cssProcessor;

    cb();
  }.bind(this));
};

JadeGenerator.prototype.createFolders = function app() {
  this.mkdir('app');
  this.mkdir('app/jade');
  this.mkdir('app/jade/layouts');
  this.mkdir('app/assets');
  this.mkdir('app/images');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
};

JadeGenerator.prototype.createFiles = function () {
  if (this.cssProcessor === 'sass') {
    this.copy('_main.sass', 'app/styles/main.sass');
  } else if (this.cssProcessor === 'stylus') {
    this.copy('_main.styl', 'app/styles/main.styl');
  }
  this.copy('_main.js', 'app/scripts/main.js');
  this.copy('_bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
};

JadeGenerator.prototype.createJadeTemplates = function () {
  this.copy('jade/_default.jade', 'app/jade/layouts/_default.jade');
  this.copy('jade/_footer.jade', 'app/jade/layouts/partials/_footer.jade');
  this.copy('jade/_html-header.jade', 'app/jade/layouts/partials/_html-header.jade');
  this.copy('jade/_nav.jade', 'app/jade/layouts/partials/_nav.jade');
  this.copy('jade/_index.jade', 'app/jade/index.jade');
};

JadeGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('gitignore', '.gitignore');
};