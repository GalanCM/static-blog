const gulp = require("gulp");

// a task to generate the css with sass
gulp.task("css", () => {
  const sass = require("gulp-sass");
  const postcss = require("gulp-postcss");
  const sourcemaps = require("gulp-sourcemaps");

  return gulp
    .src("./src/scss/theme.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.init())
    .pipe(postcss([require("autoprefixer")]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./src/_includes/css"));
});

gulp.task("watch", () => {
  gulp.watch("./src/scss/**/*.scss", gulp.parallel("css"));
  // gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
});
