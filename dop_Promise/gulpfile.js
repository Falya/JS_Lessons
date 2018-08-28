const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const polyfill = require('@babel/polyfill');
gulp.task('default', () =>
	gulp.src('js/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['@babel/polyfill']
		}))
		.pipe(polyfill())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
);