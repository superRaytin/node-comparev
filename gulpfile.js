﻿var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var banner = require("gulp-banner");
var pkg = require('./package.json');

var comment = '/*\n' +
    ' * <%= pkg.name %> <%= pkg.version %>\n' +
    ' * <%= pkg.description %>\n' +
    ' * <%= pkg.homepage %>\n' +
    ' *\n' +
    ' * Copyright 2015, <%= pkg.author %>\n' +
    ' * Released under the <%= pkg.license %> license.\n' +
    '*/\n\n';

gulp.task('default', function() {
    gulp.start(['browserify']);
});

gulp.task('browserify', function() {
    gulp.src('lib/index.js')
        .pipe(browserify({
            ignore: ['fs', 'Buffer']
        }))
        .pipe(uglify())
        .pipe(banner(comment, {
            pkg: pkg
        }))
        .pipe(rename('comparev.js'))
        .pipe(gulp.dest('dist'));
});
