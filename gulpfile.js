/*eslint no-console: 0*/
'use strict'

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    watch = require('gulp-watch');

var path = {
    entry: 'public',
    build: {
        styles: 'public/build/styles/',
        scripts: 'public/build/scripts/'
    },
    dev: {
        js: 'dev/main.js',
        less: 'public//styles/*.less',
        blocks: 'public//styles/blocks/*/*.less'
    }

}

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
    .pipe(gulp.dest(path.build.styles));
});

gulp.task('scripts', function() {

    return gulp.src([
        path.dev.js
    ])
    .pipe(concat('__main.js'))
    .pipe(gulp.dest(path.build.src))
    .pipe(uglify().on('error', function(e) {
        console.log(e);
    }))
    .pipe(rename('_main.js'))
    .pipe(gulp.dest(path.build.src))
});

gulp.task('b-watch', ['build'], function() {
    gulp.start('watch');
});

gulp.task('build', ['styles'], function() {
    return gulp.src([path.dev.html])
        .pipe(gulp.dest(path.prod.src));
});

gulp.task('watch', function() {
    watch([path.dev.src], function(event, cb) {
        gulp.start('build');
    });
});