var gulp = require('gulp'),
watch = require('gulp-watch'),
sass = require('gulp-sass'),
prefix = require('gulp-autoprefixer'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "main"
        }
    });

    watch('main/index.html', function() {
        browserSync.reload();
    });

    gulp.watch('main/assets/styles/**/*.scss', ['sass']);

    // watch('./main/assets/scripts/**/*.js', function() {
    //     gulp.start('scriptsRefresh');
    // });
    
});

gulp.task('sass', function () {
    return gulp.src('main/assets/styles/**/*.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(prefix({browsers: ['last 2 versions']}))
      .pipe(gulp.dest('main/temp/styles'))
      .pipe(browserSync.stream());
  });

gulp.task('sass:watch', function () {
    gulp.watch('main/assets/styles/**/*.scss', ['sass']);
  });

// gulp.task('scriptsRefresh', ['scripts'], function() {
//     browserSync.reload();
// })