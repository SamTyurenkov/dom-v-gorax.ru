let uglify = require("gulp-terser"),
  gulpif = require("gulp-if"),
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
        scriptsPATH.input + "metrika.min.js",
        scriptsPATH.input + "*.js",
        "!" + scriptsPATH.input + "gutenberg-blocks/*.js",
      ])
      .pipe(gulpif('!**/*.min.js', uglify({mangle: false}))
        //uglify({
       //   keep_fnames: true,
      //    mangle: false,
      //  })
      )
      .pipe(concat("main.js"))
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
