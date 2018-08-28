var fs = require("fs");
var browserify = require("browserify");
browserify("js/script.js")
  .transform("babelify", {presets: ["@babel/preset-env"]})
  .bundle()
  .pipe(fs.createWriteStream("bundle.js"));