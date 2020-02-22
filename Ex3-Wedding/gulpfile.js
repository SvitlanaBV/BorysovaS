var gulp = require('gulp'),
    concat = require('gulp-concat'),
    ugl = require('gulp-uglifycss'),
    scss = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    // browserSync = require('browser-sync'),
    fileinclude = require('gulp-file-include'),
    autoprefixer = require('gulp-autoprefixer');

// Css
gulp.task('scss', function () {
    return gulp.src([
        './node_modules/bootstrap/scss/bootstrap.scss',
        './styles/**/*.scss'
    ])
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./styles'));
});

gulp.task('concatMinifyCss', function() {
    return gulp.src([
        './styles/bootstrap.css',
        './styles/main.css'
    ])
        .pipe(concat('all-styles.css'))
        .pipe(autoprefixer({
            cascade: false,
            overrideBrowserslist: ['ie > 9', 'Firefox > 20']
        }))
        .pipe(ugl({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(gulp.dest('./dist/'));
});

// JS
gulp.task('jsOptimize', function () {
    return gulp.src([
        'js/jquery-3.4.1.slim.min.js',
        'js/jquery-3.4.1.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'js/isotope.pkgd.min.js',
        'js/main.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// img
gulp.task('imgOptimize', function () {
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});
gulp.task('fileInclude', function() {
    return gulp.src(['index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/'));
});

// gulp.task('browserSync', function() {
//     browserSync({
//         server: {
//             baseDir: "./"
//         },
//         port: 8080,
//         open: true,
//         notify: false
//     });
// });

// gulp.task('watch', function () {
//     gulp.watch('./styles/*.*').on('change', gulp.series('scss', 'concatMinifyCss'));
// });

gulp.task('default', gulp.parallel(
    // 'watch',
    // 'browserSync',
    'jsOptimize',
    'fileInclude',
    'imgOptimize'
));