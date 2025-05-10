// use deleteSync to ensure live updates to deleted files
import { deleteSync as fullclean } from 'del';

export default async function(eleventyConfig) {
// Full clean runs each time... meaning --dryrun will clean out the docs/ directory,
// but builds will be clean
	fullclean('docs/*');
	eleventyConfig.addPassthroughCopy(
		{ 	'src/fonts': 'fonts',
			'src/img': 'img',
			'src/_includes/styles.css': 'styles.css',
			'src/_includes/scripts.js': 'scripts.js' 
		}
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