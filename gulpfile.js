var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('default', function() {
    console.log("Starting gulp task")
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true,
            defaultFile: "index.html",
            log: "debug"
        }));
});
