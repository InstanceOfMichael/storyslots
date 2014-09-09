var gulp    = require('gulp'),
    concat  = require('gulp-concat');

gulp.task('concat', function(){
  gulp.src('./app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['concat']);
