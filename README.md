# Brainly Scraper

Library to scrape ```https://brainly.ph```

## Installation

```
npm install brainly-api-client
```
or
```
npm i brainly-api-client
```

## Parameters

| Name | Nullable | Data Type | Description |
|-------|----------|------------|-------------|
| query |    ✖     |    string    | The keywords you want to find |
| count |    ✖     |    integer   | Total data to be displayed |

## Example

### Simple Usage

```javascript
const brainly = require('brainly-api-client');

brainly("what is heart?").then(res => {
	console.log(res);
});
```