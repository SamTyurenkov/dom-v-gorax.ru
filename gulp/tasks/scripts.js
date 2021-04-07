let uglify = require("gulp-terser"),
  concat = require("gulp-concat"),
  scriptsPATH = {
    input: "./themes/blankblank/src/js/",
    output: "./themes/blankblank/js/",
  };
var babel = require("gulp-babel");

module.exports = function () {
  $.gulp.task("scripts:site", () => {
    return $.gulp
      .src([
        scriptsPATH.input + "metrika.js",
        scriptsPATH.input + "*.js",
        "!" + scriptsPATH.input + "gutenberg-blocks/*.js",
      ])
      .pipe(concat("main.js"))
      .pipe(
        uglify({
          keep_fnames: true,
          mangle: false,
        })
      )
      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      .pipe($.gulp.dest(scriptsPATH.output));
  });
  $.gulp.task("scripts:gutenberg", () => {
    return $.gulp
      .src([scriptsPATH.input + "gutenberg-blocks/*.js"])
      .pipe($.gulp.dest(scriptsPATH.output + "gutenberg-blocks/"));
  });
  $.gulp.task("scripts:libs", () => {
    return $.gulp
      .src(["./node_modules/@splidejs/splide/dist/js/splide.min.js",scriptsPATH.input + "situational/*.js"])
      .pipe($.gulp.dest(scriptsPATH.output));
  });
};
