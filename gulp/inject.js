'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;

module.exports = function(options) {
  gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
      options.tmp + '/serve/styles/**/*.css',
      '!' + options.tmp + '/serve/styles/affito.css'
    ], { read: false });

    var injectScripts = gulp.src([
      options.src + '/app/**/*.js',
      '!' + options.src + '/app/**/*.spec.js',
      '!' + options.src + '/app/**/*.mock.js'
    ])
    .pipe($.angularFilesort()).on('error', options.errorHandler('AngularFilesort'));

    var injectOptions = {
      ignorePath: [options.src, options.tmp + '/serve'],
      addRootSlash: false
    };

    return gulp.src(options.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(wiredep(options.wiredep))
      .pipe(gulp.dest(options.tmp + '/serve'));

  });
};
