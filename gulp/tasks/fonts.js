scriptsPATH = {
    input: "./themes/blankblank/src/fonts/",
    output: "./themes/blankblank/fonts/",
  };

module.exports = function () {

$.gulp.task("scripts:gutenberg", () => {
    return $.gulp
      .src([scriptsPATH.input + "*.ttf"])
      .pipe($.gulp.dest(scriptsPATH.output));
  });

}