var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify'),
    pump        = require('pump'),
    minifyCSS   = require('gulp-minify-css'),
    prefix      = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    imagemin    = require('gulp-imagemin'),
    rename      = require('gulp-rename'),
    strip       = require ('gulp-strip-comments');
// css
gulp.task('sass',function () {
    gulp.src('./chekout-pagу/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
        .pipe(prefix('last 3 versions','> 1%','ie 6'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./chekout-pagу/dist/css'));
});

// html coment,min img
gulp.task('default', function () {
    gulp.src('./chekout-pagу/*.html')
        .pipe(strip())
        .pipe(gulp.dest('./chekout-pagу/'));
    gulp.src('./chekout-pagу/dist/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./chekout-pagу/dist/img'))
});
// js

gulp.task('js', function () {
    gulp.src(['./chekout-pagу/sass/**/*.js', './chekout-pagу/sass/**/!js/*.min.js'])
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./chekout-pagу/dist/js'));
});


gulp.task('sass:watch',function () {
    gulp.watch('./chekout-pagу/sass/**/*.scss',['sass']);
    gulp.watch(['./chekout-pagу/sass/**/*.js', '!./chekout-pagу/sass/**/*.min.js'], ['js']);
});
