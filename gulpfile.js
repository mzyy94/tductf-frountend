var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var packager = require('electron-packager');

gulp.task('compile', function(){
	return gulp.src('src/**/*.{js,jsx}')
		.pipe(
			$.babel({
				stage: 0
			})
		)
		.pipe(gulp.dest('js'));
});

var commonOption = {
		dir: './',
		out: 'release',
		name: 'TDUCTF-2015',
		arch: 'all',
		platform: 'all',
		ignore: [
			'./node_modules/electron*',
			'./node_modules/.bin',
			'./release/',
			'./src/',
			'./.git*'
		],
		version: '0.30.5'
}

gulp.task('package:darwin', ['compile'], function (done) {
	var option = commonOption;
	option.platform = 'darwin';
	option.arch = 'x64';
	option.icon = "app-icon.icns";
	packager(option, function (err, path) {
		done();
	});
});

gulp.task('package:linux:ia32', ['compile'], function (done) {
	var option = commonOption;
	option.platform = 'linux';
	option.arch = 'ia32';
	option.icon = "app-icon.png";
	packager(option, function (err, path) {
		done();
	});
});

gulp.task('package:linux:x64', ['compile'], function (done) {
	var option = commonOption;
	option.platform = 'linux';
	option.arch = 'x64';
	option.icon = "app-icon.png";
	packager(option, function (err, path) {
		done();
	});
});

gulp.task('package:win:ia32', ['compile'], function (done) {
	var option = commonOption;
	option.platform = 'win';
	option.arch = 'ia32';
	option.icon = "app-icon.ico";
	packager(option, function (err, path) {
		done();
	});
});

gulp.task('package:win:x64', ['compile'], function (done) {
	var option = commonOption;
	option.platform = 'win';
	option.arch = 'x64';
	option.icon = "app-icon.ico";
	packager(option, function (err, path) {
		done();
	});
});

gulp.task('package:all', [
		'package:darwin',
		'package:linux:ia32',
		'package:linux:x64',
		'package:win:ia32',
		'package:win:x64'], function (done) {
	done();
});

