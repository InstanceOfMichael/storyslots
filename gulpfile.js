var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify');

gulp.task('scripts', function(){
  gulp.src('./app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['scripts']);
