'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var JadeGenerator = module.exports = function JadeGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  options['test-framework'] = this.testFramework;

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', {
    as: 'app',
    options: {
      options: {
        'skip-message': options['skip-install-message'],
        'skip-install': options['skip-install']
      }
    }
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
      message: 'Do you like sass/compass, stylus or just css',
      choices: ['stylus', 'sass', 'css']
    },
    {
      type: 'confirm',
      name: 'autoprefixer',
      message: 'Do you want to use the autoprefixer?',
      default: false
    },
    {
      type: 'confirm',
      name: 'isPrivate',
      message: 'Is this a private project?',
      default: true
    }, {
      type: 'confirm',
      name: 'jquery',
      message: 'Do you like to use jQuery',
      default: true
    }
  ];

  this.prompt(prompts, function(props) {
    this.projectName = props.projectName || this.appname;
    this.cssProcessor = props.cssProcessor;
    this.autoprefixer = props.autoprefixer;
    this.isPrivate = props.isPrivate;
    this.jquery = props.jquery;

    cb();
  }.bind(this));
};

JadeGenerator.prototype.gruntfile = function gruntfile() {
  this.template('_Gruntfile.js', 'Gruntfile.js');

  this.copy('tasks/aliases.yaml', 'tasks/aliases.yaml');
  this.copy('tasks/bump.js', 'tasks/bump.js');
  this.copy('tasks/changelog.js', 'tasks/changelog.js');
  this.copy('tasks/clean.js', 'tasks/clean.js');
  this.copy('tasks/connect.js', 'tasks/connect.js');
  this.copy('tasks/copy.js', 'tasks/copy.js');
  this.copy('tasks/jade.js', 'tasks/jade.js');
  this.copy('tasks/stylus.js', 'tasks/stylus.js');
  this.copy('tasks/watch.js', 'tasks/watch.js');
  this.copy('tasks/htmlmin.js', 'tasks/htmlmin.js');
  this.copy('tasks/imagemin.js', 'tasks/imagemin.js');
  this.copy('tasks/rev.js', 'tasks/rev.js');
  this.copy('tasks/svgmin.js', 'tasks/svgmin.js');
  this.copy('tasks/usemin.js', 'tasks/usemin.js');
  this.copy('tasks/useminPrepare.js', 'tasks/useminPrepare.js');

  if (this.autoprefixer) {
    this.copy('tasks/autoprefixer.js', 'tasks/autoprefixer.js');
  }

};

JadeGenerator.prototype.tools = function tools() {
  this.copy('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
  this.template('_package.json', 'package.json');
};

JadeGenerator.prototype.editor = function editor() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

JadeGenerator.prototype.git = function git() {
  this.template('_gitignore', '.gitignore');
};

JadeGenerator.prototype.jade = function jade() {
  this.directory('jade', 'app/jade');
};

JadeGenerator.prototype.projectFiles = function projectFiles() {
  if (this.cssProcessor === 'sass') {
    this.copy('_main.sass', 'app/styles/main.sass');
  } else if (this.cssProcessor === 'stylus') {
    this.copy('_main.styl', 'app/styles/main.styl');
  } else if (this.cssProcessor === 'css') {
    this.copy('_main.css', 'app/styles/main.css');
  }

  this.copy('_main.js', 'app/scripts/main.js');
};

JadeGenerator.prototype.install = function() {
  if (this.options['skip-install']) {
    return;
  }

  var done = this.async();
  this.installDependencies({
    skipMessage: this.options['skip-install-message'],
    skipInstall: this.options['skip-install'],
    callback: done
  });
};
