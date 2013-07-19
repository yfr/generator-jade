# Generator-jade

A generator for Yeoman to use jade for templating.

alsoyou can choose to use stylus as css preprocessor. So no ruby dependencies for this generator.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-jade` or use the `yo` command and follow instructions.
- Run: `yo jade`

## Usage

This generator is powered by the jade template engine. There is no fancy js and css frameworks included.
But you can add them very easily. Just update your bower file and run <code>bower install</code>.

As css preprocessor you can choose between sass/comapss and stylus.

All jade files are supposed to be located under app/jade/. All .jade files with an _underscore are treated as partials and not rendered directly. Everything else is a jade file that is supposed to be a page. Create subpages in folders with own index.jade files including _default_layout.jade or you own _layout.jade in /layouts.

And this is how i thought about the directory structure of the jade directory

    jade
    |-- index.jade
    |-- layouts
    |   |-- _default_layout.jade
    |   +-- partials
    |       |-- _html-header.jade
    |       |-- _footer.jade
    |       +-- _nav.jade
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
