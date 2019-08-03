let gulp =require('gulp');
gulp.task('watchAll',async ()=>{
	gulp.watch('*.html', async ()=>{
			gulp.src('*.html').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan'))
	})
	gulp.watch('css/*.css', async ()=>{
			gulp.src('css/*.css').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\css'))
	})
	gulp.watch('js/*.js', async ()=>{
			gulp.src('js/*.js').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\js'))
	})
	gulp.watch('img/*', async ()=>{
			gulp.src('img/*').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\img'))
	})
	gulp.watch('font/*', async ()=>{
			gulp.src('font/*').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\font'))
	})
	gulp.watch('*.php', async ()=>{
			gulp.src('*.php').pipe(gulp.dest('D:\\phpStudy\\WWW\\myjuhuasuan\\php'))
	})
})