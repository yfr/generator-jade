# Generator-jade

**Still very basic!**

A generator for Yeoman.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-jade`
- Run: `yo jade`

## Usage

This generator is powered by the jade template engine
Until now this is what you got. There is no fancy js and css frameworks
But you can add them very easily. Just update your bower file and run <code>bower install</code>

All jade files are supposed to be located under app/jade/. All .jade files with an _underscore are treated as partials and not rendered directly. Everything else is a jade file that is supposed to be a page.

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
