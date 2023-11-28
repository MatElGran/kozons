module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('bundle.css')
  return {
    dir: { input: 'content', includes: '../_includes' }
  }
}
