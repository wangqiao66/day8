var gulp=require('gulp');
var server=require('gulp-webserver');
gulp.task('server',function(){
    gulp.src('src')
    .pipe(server({
        port:8000,
        open:true
    }))
})