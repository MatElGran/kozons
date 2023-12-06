const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets/images')
  eleventyConfig.addPassthroughCopy('bundle.css')
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  return {
    dir: { input: 'content', includes: '../_includes' }
  }
}
