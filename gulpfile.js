/*jshint latedef: nofunc, unused: true, node: true */
/*jshint -W097 */
/*global require */
'use strict';

/* Definications of this application */
var appName = 'MyApp';

/* Dependencies */
var gulp = require('gulp');
var objectAssign = require('object-assign');
var webpack = require('webpack-stream');
var runSequence = require('run-sequence');
var del = require('del');
var browserSync = require('browser-sync');
var jshint = require('gulp-jshint');

/* Environments */
var src_root = 'src';
var dist_root = 'release';

/* Options */
var watch = false;

gulp.task('build:js', function() {
  var src = src_root + '/**/' + appName + '.*';
  var dist = dist_root + '/js/';
  var config = {
    output: {
      filename: 'main.js',
      publicPath: '/js/' //path that will be considered when requiring your files
    },
    resolve: {
      extensions: ['.es6', '', '.js', '.ts'],
      modulesDirectories: ['node_modules', 'js', 'ts']
    },
    module: {
      loaders: [
        {
          test: /\.es6$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel?presets[]=es2015'
        },
        {
          test: /\.ts$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'typescript'
        }
      ]
    }
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
  gulp.watch('build:html');
});

gulp.task('build:html', function() {
  var src = src_root + '/**/*.html';
  var dist = dist_root;

  return gulp.src(src)
    .pipe(gulp.dest(dist));
});

gulp.task('lint', function() {
  var src = src_root + '/**/*.es6';

  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function(callback) {
    return del(['.tmp', 'release'], callback);
//                                  ^^^^^^^^
//   This is the key here, to make sure tasks run asynchronously!
});

gulp.task('default', function(callback) {
  runSequence('clean', ['build:js', 'build:html'], callback);
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: dist_root
        }
    });
});
