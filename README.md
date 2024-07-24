# Browser Feature Compatibility // [WONDERIUM.DEV](https://wonderium.dev)

This project provides information on the addition of CSS, HTML, and SVG features in the most widely-used browsers, including the latest date of full stable support.

Data on dates is sourced from our package [`@wonderium/browser-releases`](https://github.com/wonderium/browser-releases).

## Installing

To install `@wonderium/browser-feature-compatibility` as a node package, use the npm install command:

```bash
npm install @wonderium/browser-feature-compatibility
```

## Examples

Versions, IDs and dates are provided for example purposes only.

```json
{
	"data": [
		{
			"id": "some-feature-name",
			"browsers": {
				"chrome": 120,
				"chrome_android": 93,
				"edge": 93,
				"firefox": 92,
				"firefox_android": 92,
				"safari": 17.2,
				"safari_ios": 15
			},
			"latest_release_date": {
				"year": 2023,
				"month": 12,
				"day": 18
			}
		}
	]
}
```

We have also included some features that may not be supported in one of the listed browsers; therefore, these features do not have a last date but are marked as having limited availability.

```json
{
	"data": [
		{
			"id": "another-feature-name",
			"browsers": {
				"chrome": 120,
				"chrome_android": 93,
				"edge": 93,
				"firefox": null,
				"firefox_android": null,
				"safari": 17.2,
				"safari_ios": 15
			},
			"latest_release_date": "Limited availability"
		}
	]
}
```

---

**Wonderium.dev** is an interactive learning platform for frontend developers.\
Our mission is to make web development studying more practical and understandable.
