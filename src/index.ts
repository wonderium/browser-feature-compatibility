import htmlJSON from './data/html.json';
import cssJSON from './data/css.json';
import svgJSON from './data/svg.json';
import jsJSON from './data/js.json';
import jsBrowserJSON from './data/js-browser.json';

import type {
	Browser,
	BrowserVersion,
	FeatureBrowsers,
	FeatureId,
	FeatureDate,
	FeatureData,
	Feature,
	Features,
	Sections,
	Section,
} from './types/main';

const html: Features = htmlJSON.data;
const css: Features = cssJSON.data;
const svg: Features = svgJSON.data;
const js: Features = jsJSON.data;
const jsBrowser: Features = jsBrowserJSON.data;

export { html, css, svg };

export default {
	html,
	css,
	svg,
	js,
	jsBrowser
} as Sections;

export type {
	Browser,
	BrowserVersion,
	FeatureBrowsers,
	FeatureId,
	FeatureDate,
	FeatureData,
	Feature,
	Features,
	Sections,
	Section,
} from './types/main';
