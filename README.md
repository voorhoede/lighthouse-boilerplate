# [Lighthouse](https://github.com/GoogleChrome/lighthouse) Boilerplate

> Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices.

**This boilerplate helps you extend [Lighthouse](https://github.com/GoogleChrome/lighthouse) with your own audits and reports.**

To get started, follow the steps below. When you're done, you'll have your own Lighthouse project, like our [Lighthouse Security](https://github.com/voorhoede/lighthouse-security).

## Getting started

### 1. Clone this repository

```sh
git clone --depth 1 https://github.com/voorhoede/lighthouse-boilerplate.git lighthouse-my-project
cd lighthouse-my-project
```

### 2. Make it your own

```sh
rm -rf .git && git init && npm init
```
This re-initializes the repo and sets up your npm project.

### 3. Install the dependencies

```sh
npm install
# or
# yarn install
```

### 4. Replace boilerplate content with your own

[Find all instances of `boilerplate`](https://github.com/voorhoede/lighthouse-boilerplate/search?utf8=✓&q=boilerplate) and replace them with your own config, audits, gatherers and reports.
This repository contains an example of an audit, gatherer and configuration to run it. You can use it as a reference.
For more help with authoring audits see the [custom audit recipe in the Lighthouse docs](https://github.com/GoogleChrome/lighthouse/tree/master/docs/recipes/custom-audit). And don't forget to look at the [guidelines](CONTRIBUTING.md) in this repository.

### 5. Enable continuous integration (optional)

Lighthouse uses Travis CI for continuous integration. This repository contains a [`.travis.yml`](.travis.yml) to test commits and pull requests. To enable continuous integration go to your [Travis CI profile](https://travis-ci.org/profile/) and switch on your repository. You might need to hit "Sync account" in order for your new repository to appear in the list. Once Travis is enabled, the tests will run on every git push. The badge in this readme will be updated with the current build status.

### 6. Enable coverage reporting (optional)

This repository is configured to generate coverage reports. These reports can be published to Coveralls.io, which integrates with your repository on GitHub. To enable coverage reports [add the repository on Coveralls.io](https://coveralls.io/repos/new) You might need to hit "Sync repos" in order for your new repository to appear in the list. The badge in this readme will be updated with the current code coverage.

### 7. Version and release**

To let others use your project you need to [version your project](https://docs.npmjs.com/cli/version) and [publish your project as an npm package](https://docs.npmjs.com/cli/publish):

```sh
npm version minor
npm publish
```

Note: this is the last step. So remove these steps from the readme before you publish it to npm. If this boilerplate helped you out, consider to put a link to this repository to help others.

---

# [Lighthouse](https://github.com/GoogleChrome/lighthouse) Boilerplate [![Linux Build Status](https://travis-ci.org/voorhoede/lighthouse-boilerplate.svg?branch=master)](https://travis-ci.org/voorhoede/lighthouse-boilerplate) [![Coverage Status](https://coveralls.io/repos/github/voorhoede/lighthouse-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/voorhoede/lighthouse-boilerplate?branch=master) [![npm lighthouse-boilerplate package](https://img.shields.io/npm/v/lighthouse-boilerplate.svg)](https://npmjs.org/package/lighthouse-boilerplate)

**Run Google Lighthouse with additional [boilerplate] audits.**

<img width="100%" alt="Lighthouse Boilerplate report" src="https://github.com/voorhoede/lighthouse-boilerplate/raw/master/docs/boilerplate-report.jpg">

## Installation

```sh
npm install -g lighthouse-boilerplate
```

## Run from CLI

Run the command from CLI like displayed below. The options are the same as for
the [default Lighthouse CLI options](https://github.com/GoogleChrome/lighthouse#cli-options).

```sh
lighthouse-boilerplate <url> [options]
```

To run boilerplate audits only, use the `--boilerplate` flag:

```sh
lighthouse-boilerplate <url> --boilerplate [options]
```

## Use in code

The extension can also be used within your code. A short example is given below.
To render reports etc. it is recommended to import functionality from Lighthouse.

```javascript
const runLighthouse = require('lighthouse-boilerplate')

runLighthouse(url, flags)
  .then(results => console.log(results))
```

Alternatively you can import just the `lighthouse-boilerplate` configuration and use it in your own runner:

```javascript
const lighthouse = require('lighthouse')
const chromeLauncher = require('lighthouse/chrome-launcher')

// import one or more lighthouse configs:
const boilerplateConfig = require('lighthouse-boilerplate/config')

// combine configs into one:
const config = Object.assign({},
  boilerplateConfig,
  { extends: 'lighthouse:default' }
)

// run lighthouse as usual:
async function run(url, flags = {}) {
    const chrome = await chromeLauncher.launch()
    flags.port = chrome.port
    const results = await lighthouse(url, flags, config)
    const stopped = await chrome.kill()
    return results
}
```

## Contributing

Contributions are always welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for [guidelines](CONTRIBUTING.md#guidelines) and [development scripts](CONTRIBUTING.md#scripts).


## License

[Apache 2.0 Licensed](LICENSE) by [De Voorhoede boilerplate](https://www.voorhoede.nl/)
