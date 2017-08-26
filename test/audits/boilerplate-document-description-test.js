'use strict';

const Audit = require('../../audits/boilerplate-document-description');
const assert = require('assert');

/* eslint-env mocha */

describe('Boilerplate: Cookie Document description audit', () => {
  it('fails when document has no description meta tag', () => {
    return assert.equal(Audit.audit({
      BoilerplateDocumentDescription: null
    }).rawValue, false);
  });

  it('fails when document description meta tag is an empty string', () => {
    return assert.equal(Audit.audit({
      BoilerplateDocumentDescription: '   '
    }).rawValue, false);
  });

  it('passes when no generator meta tag is present', () => {
    return assert.equal(Audit.audit({
      BoilerplateDocumentDescription: 'Boilerplate description'
    }).rawValue, true);
  });
});
