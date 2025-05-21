module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "_posts",
      includes: "../_includes",
      output: "_site"
    }
  };
};
