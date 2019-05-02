const gulp = require("gulp");
const sass = require("gulp-sass");
const config = require("./paths.config");
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require("node-sass");

function style() {
	return gulp.src(config.scssBaseFilePath)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.scssDestinationDirPath));
}

gulp.task('style', style);