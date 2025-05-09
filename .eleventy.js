export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.addPassthroughCopy(
		[	'src/fonts',
			'src/img',
		{ 	'src/_includes/img': 'img',
			'src/_includes/styles.css': 'styles.css',
			'src/_includes/scripts.js': 'scripts.js' 
		}]
	);
	return {
		dir: {
			input: "src",
			includes: "_includes",
			output: "docs"
		},
		templateFormats: [
			"md",
			"html",
			"njk",
			"liquid"
		],
		passthroughFileCopy: true,
	}
};