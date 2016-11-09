# THIS PROJECT IS NOT ACTIVELY MAINTAINED ANYMORE. IF YOU WISH TO WORK ON IT I WOULD LOVE TO GRAND YOU THE RESPECTIVE RIGHTS. JUST CONTACT ME!

# Generator-jade
[![NPM version](https://badge.fury.io/js/generator-jade.png)](http://badge.fury.io/js/generator-jade)

[![Build Status](https://travis-ci.org/yfr/generator-jade.png?branch=master)](https://travis-ci.org/yfr/generator-jade)

A generator for Yeoman to use jade for templating.

Also: you can choose to use stylus as css preprocessor. So no ruby dependencies for this generator.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-jade` or use the `yo` command and follow instructions.
- Run: `yo jade`

## Usage

This generator is powered by the jade template engine. There is just jQuery included. No other fancy js and css frameworks.
But you can add them very easily. Just update your bower file and run <code>bower install</code>.

As css preprocessor you can choose between sass/comapss and stylus. If you don't need a preprocessor, you can choose css.

All jade files are supposed to be located under app/jade/. All .jade files with an _underscore are treated as partials and not rendered directly. Everything else is a jade file that is supposed to be a page. Create subpages in folders with own index.jade files including _default_layout.jade or you own _layout.jade in /layouts.

And this is how i thought about the directory structure of the jade directory

    jade
    |-- index.jade
    |-- layouts
    |   |-- _default_layout.jade
    |-- page1
    |  |-- index.jade
    |       |-- partials
    |           |-- _partial.jade
    + - page2
       |-- index.jade
            |-- partials
                |-- _partial.jade

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
