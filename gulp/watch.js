var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "main"
        }
    });

    watch('./main/index.html', function() {
        browserSync.reload();
    });

    watch('./main/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

    // watch('./main/assets/scripts/**/*.js', function() {
    //     gulp.start('scriptsRefresh');
    // });
    
});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./main/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

// gulp.task('scriptsRefresh', ['scripts'], function() {
//     browserSync.reload();
// })