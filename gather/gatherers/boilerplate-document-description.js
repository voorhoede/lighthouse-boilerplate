'use strict';

const Gatherer = require('lighthouse').Gatherer;

class BoilerplateDocumentDescription extends Gatherer {
  /**
   * @param {{driver: !Object}} options Run options
   * @return {!Promise<?string>} The value of the description meta's content attribute, or null
   */
  afterPass(options) {
    const driver = options.driver;

    return driver.querySelector('head meta[name="description"]')
      .then(node => node && node.getAttribute('content'));
  }
}

module.exports = BoilerplateDocumentDescription;
