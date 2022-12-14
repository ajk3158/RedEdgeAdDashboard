const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const streamify = require('gulp-streamify');


gulp.task('default', () => {
    return browserify('main.js')
        .transform(babelify, {presets: ["@babel/env", "@babel/preset-react"]})
        .bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest('build'))
        .pipe(rename('all.min.js'))
        .pipe(streamify(concat('all.min.js')))
        .pipe(streamify(uglify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
    gulp.watch('js/*.js', ['default']);
});