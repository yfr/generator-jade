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
        'styles/fonts/*'
      ]
    }, {
      expand: true,
      cwd: '<%= folders.app %>',
      dest: '<%= folders.tmp %>',
      src: [
        'scripts/{,*/}*js', 'bower_components/**/*js'
      ]
    }]
  }
};
