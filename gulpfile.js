//Require modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

//Initialize local server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: './dist'
  });
});

//Reloads the page when called
gulp.task('bs-reload', function () {
  browserSync.reload();
});

//Jade => Html, minifies output
gulp.task('jade', function () {
  return gulp.src('lib/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream({once: true}))
});

//Sass => Css
gulp.task('sass', function () {
  return gulp.src('lib/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream({once: true}))
});

gulp.task('scripts', function () {
  return gulp.src('lib/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browserSync.stream({once: true}))
});

//Default Gulp task
gulp.task('default', ['browser-sync'], function () {
  gulp.watch('./lib/jade/*.jade', ['jade']);
  gulp.watch('./lib/sass/*.sass', ['sass']);
  gulp.watch('./lib/js/*.js', ['scripts']);
});
