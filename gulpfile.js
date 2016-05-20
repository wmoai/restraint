var gulp = require('gulp')
, babel = require('gulp-babel')
, browserify = require('browserify')
, source = require('vinyl-source-stream')
, buffer = require('vinyl-buffer')
;

gulp.task('browserify', () => {
  browserify('./src/container.jsx')
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.{js,jsx}', ['browserify']);
});
