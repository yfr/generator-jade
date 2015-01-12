module.exports = {
  compile: {
    files: [{
      expand: true,
      cwd: '<%= folders.app %>/styles',
      src: ['{,*/}*.styl', '!**/_*'],
      dest: '<%= folders.tmp %>/styles',
      ext: '.css'
    }],
    options: {
      compress: false,
      // convert the css url() declaration into nib inline imaging function
      // this converts images smaller than 30kb to data url
      urlfunc: 'url'
    }
  }
};
