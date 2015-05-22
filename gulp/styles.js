'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var wiredep = require('wiredep').stream;

module.exports = function(options) {

  gulp.task('bootstrap', function () {
    return gulp.src($.mainBowerFiles())
      .pipe($.filter(function(file) {
        return /bootstrap\-sass\-official\/assets\/stylesheets\/bootstrap/.test(file.path);
      }))
      .pipe($.concat('bootstrap.scss'))
      .pipe($.sass())
      .pipe(gulp.dest(options.tmp + '/serve/bootstrap/'));
  });

  gulp.task('styles', ['bootstrap'], function () {
    var sassOptions = {
      style: 'expanded'
    };

    var injectFiles = gulp.src([
      options.src + '/styles/**/*.scss',
      '!' + options.src + '/app/index.scss',
      '!' + options.src + '/app/vendor.scss'
    ], { read: false });

    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/styles/', '');
        console.log(filePath);
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };

    var indexFilter = $.filter('index.scss');
    var vendorFilter = $.filter('vendor.scss');

    return gulp.src([
      options.src + '/styles/**/*.scss'
    ])
      .pipe(indexFilter)
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(indexFilter.restore())
      .pipe(vendorFilter)
      .pipe(wiredep(options.wiredep))
      .pipe(vendorFilter.restore())
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassOptions)).on('error', options.errorHandler('Sass'))
      .pipe($.autoprefixer()).on('error', options.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.tmp + '/serve/styles/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
