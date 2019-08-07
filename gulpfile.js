let gulp = require('gulp');
// let concat = require('gulp-concat');
// let uglify = require('gulp-uglify');
// let rename = require('gulp-rename');
// let connect = require('gulp-connect');

// 复制
gulp.task("copyhtml", async () => {
	gulp.src("xm/**/*").pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan'))
});

//合并压缩并改名
gulp.task("concatanduglifyandname", async () => {
	gulp.src("myjuhuasuan/js/*.js")
		.pipe(concat('tools.js'))
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\js'))
		.pipe(uglify())
		.pipe(rename('tools.min.js'))
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\js'));
});



//监听
gulp.task('watchAll', async () => {
	gulp.watch('*.html', async () => {
		gulp.src('*.html').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan'))
	})
	gulp.watch('css/*.css', async () => {
		gulp.src('css/*.css').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\css'))
	})
	gulp.watch('js/*.js', async () => {
		gulp.src('js/*.js').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\js'))
	})
	gulp.watch('img/*', async () => {
		gulp.src('img/*').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\img'))
	})
	gulp.watch('font/*', async () => {
		gulp.src('font/*').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\font'))
	})
	gulp.watch('*.php', async () => {
		gulp.src('*.php').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\php'))
	})
})

gulp.task("server", async () => {
	connect.server({
		root: 'myjuhuasuan/',
		livereload: true
	});
});