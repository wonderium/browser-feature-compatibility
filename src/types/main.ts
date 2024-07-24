export type Browser =
	| 'chrome'
	| 'chrome_android'
	| 'edge'
	| 'firefox'
	| 'firefox_android'
	| 'safari'
	| 'safari_ios';
export type BrowserVersion = number | null;

export type Section = 'html' | 'svg' | 'css';

export type FeatureBrowsers = Record<Browser, BrowserVersion>;
export type FeatureId = string;
export type FeatureDate =
	| {
			year: number;
			month: number;
			day: number;
	  }
	| string;

export interface FeatureData {
	id: FeatureId;
	browsers: FeatureBrowsers;
}

export interface Feature extends FeatureData {
	latest_release_date: FeatureDate;
}

export type Features = Feature[];

export type Sections = Record<Section, Features>;
