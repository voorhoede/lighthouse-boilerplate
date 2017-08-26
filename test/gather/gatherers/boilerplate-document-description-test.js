'use strict';

/* eslint-env mocha */

const Gatherer = require('../../../gather/gatherers/boilerplate-document-description');
const assert = require('assert');
let gatherer;

describe('BoilerplateDocumentDescription gatherer', () => {
  // Reset the Gatherer before each test.
  beforeEach(() => {
    gatherer = new Gatherer();
  });

  it('returns an artifact', () => {
    return gatherer.afterPass({
      driver: {
        querySelector() {
          return Promise.resolve({
            getAttribute: () => 'Boilerplate description'
          });
        }
      }
    }).then(artifact => {
      assert.ok(typeof artifact === 'string');
      assert.ok(/Boilerplate/gim.test(artifact));
    });
  });
});
