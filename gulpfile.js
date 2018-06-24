const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('default',() => {
  gulp.watch(['build/views/**/*.pug'],obj => { gulp.start('views') });
});

gulp.task('views',() => {
  return gulp.src('build/views/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('src/app'));
});
