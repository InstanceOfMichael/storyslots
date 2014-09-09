var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    concat  = require('gulp-concat');

gulp.task('scripts', function(){
  gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['scripts']);
