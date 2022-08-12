const gulp = require('gulp');
const babel = require("gulp-babel");
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const src = './resources/js/app.js';
const dist = './public/build/';
const webpack = require('gulp-webpack');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var util = require('gulp-util');

var bro = require('gulp-bro');


gulp.task( 'default', () => {
    return gulp.src( src )
        /*.pipe( sourcemaps.init() )
        .pipe( babel( {
            presets: [
                '@babel/preset-env',
		        '@babel/preset-react'
            ]
        } ) )
        .pipe( concat( 'app.min.js' ) )
        .pipe( uglify() )
        .pipe( sourcemaps.write( '.' ) )*/
        .pipe(webpack(  ))
        .pipe( gulp.dest( dist ) );

/*var b = browserify({
    entries: './resources/js/app.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['es2015']
    })]
  });

  return b.bundle()
    .pipe(source('./resources/js/app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // Add other gulp transformations (eg. uglify) to the pipeline here.
      .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/build/')); */

    /*gulp.src('./resources/js/app.js')
    .pipe(bro({
      transform: [
        babelify.configure({ presets: ["@babel/preset-env", "@babel/preset-react"] }),
        [ 'uglifyify', { global: true } ]
      ]
    }))
    .pipe(gulp.dest('./public/build/'))*/

} );

gulp.task( 'watch', function() {
    gulp.watch( 'src/*.js', gulp.series( 'default' ) );
} );
