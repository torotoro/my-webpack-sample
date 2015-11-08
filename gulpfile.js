/*jshint latedef: nofunc, unused: true, node: true */
/*jshint -W097 */
/*global require */
'use strict';

var gulp = require('gulp');
var objectAssign = require('object-assign');
var webpack = require('webpack-stream');
var runSequence = require('run-sequence');
var del = require('del');

var src_root = 'src';
var dist_root = 'release';

var watch = false;

gulp.task('build:js', function() {
  var src = src_root + '/**/main.js';
  var dist = dist_root + '/js';
  var config = {
    output: {
      filename: 'myapp.js'
    },
    module: {
      loaders: [
      ]
    },
  };

  if(watch) {
    config = objectAssign(config, {
      watch: true,
      devtool: '#inline-source-map'
    });
  }

  return gulp.src(src)
    .pipe(webpack(config))
    .pipe(gulp.dest(dist));
});

gulp.task('watch:js', function(callback) {
  watch = true;

  runSequence('build:js', callback);
});

gulp.task('build:html', function() {
  var src = src_root + '/**/*.html';
  var dist = dist_root;

  return gulp.src(src)
    .pipe(gulp.dest(dist));
});

gulp.task('clean', function(callback) {
    return del(['.tmp', 'release'], callback);
//                                  ^^^^^^^^ 
//   This is the key here, to make sure tasks run asynchronously! 
});

gulp.task('default', function(callback) {
  runSequence('clean', ['build:js', 'build:html'], callback);
});
