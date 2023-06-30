# Brainly Scraper

Library to scrape ```https://brainly.ph```

## Installation

```
npm install brainlyph-api-client
```
or
```
npm i brainlyph-api-client
```

## Parameters

| Name | Nullable | Data Type | Description |
|-------|----------|------------|-------------|
| query |    ✖     |    string    | The keywords you want to find |
| count |    ✖     |    integer   | Total data to be displayed |

## Example

### Simple Usage

```javascript
const brainly = require('brainlyph-api-client');

brainly("what is heart?",1).then(res => {
	console.log(res);
});
```