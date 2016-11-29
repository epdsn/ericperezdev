var gulp = require('gulp'); // build system
var jade = require('gulp-jade'); // jade allows to build html markup quickly
var rename = require('rename');
var gulpLoadPlugins = require('gulp-load-plugins'); // Automatically load any gulp plugins in your package.json
var plugins = gulpLoadPlugins();

var less = require('gulp-less'); // less allows you to build css files.
var sass = require('gulp-sass'); // sass allows you to build css files.
var concat = require('gulp-concat'); // concentrates certain files
var livereload = require('gulp-livereload') // reloads browser when updating certain files. Works with live reload chrome extension.
var express = require('express'); // web server
var app =  express(); // refrences the express web server
var gutil = require('gulp-util'); // utility functions and log for gulp plugins (optional)
var path = require('path'); // used by express server
var data = require('gulp-data'); // connects to jason file.


// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = './build';

// takes all files and builds a directory structure.
app.use(express.static(path.resolve('./build')));

app.listen('8080', function(){
    gutil.log('Listening on', '8080')
});


// For building html from jade
gulp.task('html', function () {
    gulp.src('jade/*.jade')
    .pipe(data( function(file) {
        return require('./data.json');
    } ))
    .pipe(jade({
        pretty:true
    }))
    .pipe(gulp.dest('build'))
    // refresh after build
    .pipe(livereload())
});

gulp.task('css', function() {
    gulp.src(['css/*.css', 'sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(livereload())
});

gulp.task('images', function(){
    gulp.src('images/**/*')
        .pipe(gulp.dest('build/images'))
        .pipe(livereload())
});

gulp.task('js', function(){
    gulp.src('js/**/*')
        .pipe(gulp.dest('build/js'))
        .pipe(livereload())
});


gulp.task('icons', function(){
    return gulp.src('bower_components/font-awesome/fonts/**.*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('watch', ['build'], function(){
    
    livereload.listen();

    // Watches all three assests for changes: 
    // jade files, sass, and if images are added.
    gulp.watch('jade/**/*.jade', ['html']);
    gulp.watch('sass/*.scss', ['css']);
    gulp.watch('images/*', ['images']);

});

// Runs all tasks on build
gulp.task('build', ['html', 'css', 'images', 'js', 'icons']);
