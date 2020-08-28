const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('buildpc', function (cb) {
  exec('cd pc/fresh-sxu-pc && npm run build', function (err) {
    if (err) {
      console.log(err);
    }
    gulp.src('pc/fresh-sxu-pc/fresh_sxu/pc/**/*')
      .pipe(gulp.dest('fresh_sxu/pc/'));
    cb();
  });
});

gulp.task('buildmobile', function (cb) {
  exec('cd mobile/fresh-sxu-mobile && npm run build', function (err) {
    if (err) {
      console.log(err);
    }
    gulp.src('mobile/fresh-sxu-mobile/fresh_sxu/mobile/**/*')
      .pipe(gulp.dest('fresh_sxu/mobile/'));
    cb();
  });
});

gulp.task('copypc', function () {
  return gulp.src('pc/fresh-sxu-pc/fresh_sxu/pc/**/*')
    .pipe(gulp.dest('fresh_sxu/pc/'));
});

gulp.task('copymobile', function () {
  return gulp.src('mobile/fresh-sxu-mobile/fresh_sxu/mobile/**/*')
    .pipe(gulp.dest('fresh_sxu/mobile/'));
});

gulp.task('copyother', function () {
  return gulp.src('other/**/*')
    .pipe(gulp.dest('fresh_sxu/'));
});

gulp.task('buildall', gulp.parallel('buildpc', 'buildmobile', 'copyother', function (cb) {
  cb();
}));

gulp.task('copyall', gulp.parallel('copypc', 'copymobile', 'copyother', function (cb) {
  cb();
}));
