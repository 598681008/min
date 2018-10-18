var gulp=require('gulp');
var minify=require('gulp-minify-html');
// gulp进行复制，将文件合并到dist文件夹
gulp.task('copy',function(){
    gulp.src('src/*.html').pipe(gulp.dest('dist/'));
})
// 监听文件夹，将改动部分传回copy任务重新合并
gulp.task('watch',function(){
    gulp.watch('src/*.html',function(){
        gulp.run('copy');
    });
})
//监听文件夹并压缩打包至dist文件夹
gulp.task('minifyhtml',function(){
    gulp.src('src/*.html').pipe(minify()).pipe(gulp.dest('dist/'))
})
gulp.task('watch',function(){
    gulp.watch('src/*.html',function(){
        gulp.run('minifyhtml');
    });
}) 