// Requirements

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browsersync = require('browser-sync'),
    reload = browsersync.reload,
    rename = require('gulp-rename'),
    scss = require('gulp-sass'),
    del = require('del'),
    uglify = require('gulp-uglify');

// Tasks

gulp.task('browser-sync', function() {
  browsersync({
    server: {
      baseDir: "site/"
    }
  });
});

gulp.task('html', function () {
  return gulp.src('site/*.html')
  .pipe(reload({stream:true}));
});

gulp.task('scss', function () {
  return gulp.src('site/scss/*.scss')
  .pipe(scss().on('error', scss.logError))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('site/css/'))
  .pipe(reload({stream:true}));
});

gulp.task('scripts', function () {
  gulp.src(['site/js/**/*.js', '!site/js/**/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('site/js'))
  .pipe(reload({stream:true}));
});

// Build
// gulp.task('build:serve', function() {
//   browsersync({
//     server: {
//       baseDir: "build/"
//     }
//   });
// });
//
// gulp.task('build:cleanfolder', function (cb) {
//   del([
//     'build/**'
//   ]);
//   cb();
// });
//
// gulp.task('build:copy', ['build:cleanfolder'], function () {
//   return gulp.src('site/**/*/')
//   .pipe(gulp.dest('build/'));
// });
//
// gulp.task('build:remove', ['build:copy'], function (cb) {
//   del([
//     'build/scss/'
//   ]);
//   cb();
// });
// gulp.task('build', ['build:copy', 'build:remove']);


// Watch
gulp.task('watch', function () {
  gulp.watch('site/*.html', ['html']);
  gulp.watch('site/scss/**/*.scss', ['scss']);
  gulp.watch('site/js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch', 'html', 'scss', 'scripts', 'browser-sync']);
