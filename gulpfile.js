/*eslint no-console: 0*/
'use strict'

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    nodemon = require('gulp-nodemon'),
    babel = require('gulp-babel'),
    preset = require('babel-preset-es2015'),
    browserSync = require('browser-sync').create();

var reload = browserSync.reload;

var path = {
    entry: 'public',
    build: {
        styles: 'public/build/styles/',
        scripts: 'public/build/scripts/'
    },
    dev: {
        html: 'public/app/**/*.twig',
        htmlBlocks: 'public/app/blocks/*/*.twig',
        js: 'public/scripts/*/*.js',
        less: 'public/styles/*.less',
        blocks: 'public/styles/blocks/*/*.less'
    }
}

gulp.task('sync', function() {
    browserSync.init({
        proxy: "localhost:3000",
        open: true,
        notify: true
    });
});

gulp.task('html', function(){
    gulp.src(path.dev.html)
    .pipe(reload({stream: true}));
});

gulp.task('styles', function() {
    return gulp.src([
        path.dev.less,
        path.dev.blocks
    ])
    .pipe(concat('__main.less'))
    .pipe(less())
    .on('error', console.log)
    .pipe(gulp.dest(path.build.styles))
    .pipe(rename('_main.css'))
    .pipe(gulp.dest(path.build.styles))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {

    return gulp.src([
        path.dev.js
    ])
    //.pipe(concat('__main.js'))
    .pipe(babel({presets: [preset]}))
    .pipe(gulp.dest(path.build.scripts))
    .pipe(uglify().on('error', function(e) {
        console.log(e);
    }))
    //.pipe(rename('_main.js'))
    .pipe(babel({presets: [preset]}))
    .pipe(gulp.dest(path.build.scripts))
    .pipe(reload({stream: true}));
});

gulp.task('build', ['styles', 'scripts'], function() {
    return gulp.src([path.dev.html])
        .pipe(gulp.dest(path.prod.src));
});

gulp.task('watch',function(){
    gulp.watch([path.dev.less, path.dev.blocks, path.dev.js, path.dev.html, path.dev.htmlBlocks], ['styles', 'scripts']);
    reload({stream: true});
});

gulp.task('default', ['watch', 'sync']);