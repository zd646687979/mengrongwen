var gulp = require("gulp");
var sass = require("gulp-sass")
var minfyCSS = require("gulp-minify-css")
var imageMin = require("gulp-imagemin")

//copy - html
gulp.task("html",function(){
    gulp.src("**/*.html")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\gongsiPage"))
})

//Sass编译
gulp.task("sass",function(){
    gulp.src("sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
})

//编译SASS 并压缩
gulp.task("sass-cssMin",function(){
    gulp.src("sass/*.scss")
    .pipe(sass())
    // .pipe(minfyCSS())
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\gongsiPage\\css"))
})

//压缩图片
gulp.task("imgMin",function(){
    gulp.src("img/**/*.*")
    .pipe(imageMin())
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\gongsiPage\\img"))
})

//copy -- JS
gulp.task("script",function(){
    gulp.src("js/*.js")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\gongsiPage\\js"))
})

gulp.task("watch",function(){
    gulp.watch("**/*.html",["html"]);
    gulp.watch("sass/*.scss",["sass-cssMin"]);
    gulp.watch("sass/*.scss",["sass"]);
    gulp.watch("js/*.js",["script"]);    
    gulp.watch("img/*",["imgMin"]);
})

