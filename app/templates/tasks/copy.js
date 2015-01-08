module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= folders.app %>',
      dest: '<%= folders.dist %>',
      src: [
        '*.{ico,txt}',
        '.htaccess',
        'images/{,*/}*.{jpg,jpeg,png,webp,gif,svg}',
        'audio/{,*/}*',
        'styles/fonts/*',
        'scripts/**/*js',
        'bower_components/**/*js',
        '!bower_components/closure-library/**/*js',
        'data/**/*'
      ]
    }, {
      expand: true,
      cwd: '<%= folders.tmp %>',
      dest: '<%= folders.dist %>',
      src: [
        'styles/*.css',
        '**/*.html'
      ]
    }]
  }
};
