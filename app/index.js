'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var JadeGenerator = module.exports = function JadeGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(
    this.readFileAsString(path.join(__dirname, '../package.json'))
  );
};

util.inherits(JadeGenerator, yeoman.generators.Base);

JadeGenerator.prototype.askFor = function askFor() {
  var cb = this.async(),
    welcomeMsg = 'You are running generator-jade version: ' + this.pkg.version,
    prompts;

  console.log(welcomeMsg);

  prompts = [
    {
      name: 'projectName',
      message: 'Name your project'
    }, {
      type: 'list',
      name: 'cssProcessor',
      message: 'Do you like sass/compass or stylus as a css preprocessor',
      choices: ['stylus', 'sass']
    }, {
      type: 'confirm',
      name: 'jquery',
      message: 'Do you like to use jQuery'
    }
  ];

  this.prompt(prompts, function(props) {
    this.projectName = props.projectName;
    this.cssProcessor = props.cssProcessor;
    this.jquery = props.jquery;

    cb();
  }.bind(this));
};

JadeGenerator.prototype.gruntfile = function gruntfile() {
  this.template('_Gruntfile.js', 'Gruntfile.js');
};

JadeGenerator.prototype.tools = function tools() {
  this.copy('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
};

JadeGenerator.prototype.jade = function jade() {
  this.copy('jade/_default.jade', 'app/jade/layouts/_default.jade');
  this.copy('jade/_footer.jade', 'app/jade/layouts/default-partials/_footer.jade');
  this.copy('jade/_html-header.jade', 'app/jade/layouts/default-partials/_html-header.jade');
  this.copy('jade/_header.jade', 'app/jade/layouts/default-partials/_header.jade');
  this.copy('jade/_index.jade', 'app/jade/index.jade');
};

JadeGenerator.prototype.projectFiles = function projectFiles() {
  if (this.cssProcessor === 'sass') {
    this.copy('_main.sass', 'app/styles/main.sass');
  } else if (this.cssProcessor === 'stylus') {
    this.copy('_main.styl', 'app/styles/main.styl');
  }

  this.copy('_main.js', 'app/scripts/main.js');
};

JadeGenerator.prototype.editor = function editor() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

JadeGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
};