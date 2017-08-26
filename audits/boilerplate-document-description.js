'use strict';
const Audit = require('lighthouse').Audit;

class BoilerplateDocumentDescriptionAudit extends Audit {
  static get meta() {
    return {
      category: 'Boilerplate',
      name: 'boilerplate-document-description',
      description: 'Document has a `<meta name="description">`.',
      failureDescription: 'Document does not have a `<meta name="description">`',
      helpText: 'A meta description tag provides search engines and other user agents ' +
          'with information about a webpage. ' +
          '[Learn more](https://support.google.com/webmasters/answer/79812?hl=en)',
      requiredArtifacts: ['BoilerplateDocumentDescription']
    };
  }

  static audit(artifacts) {
    const description = artifacts.BoilerplateDocumentDescription;

    if (description === null) {
      return {
        debugString: 'No `<meta name="description">` tag found',
        rawValue: false
      };
    }

    if (description.trim().length === 0) {
      return {
        debugString: '`<meta name="description">` tag has no content value',
        rawValue: false
      };
    }

    return {
      rawValue: true
    };
  }
}

module.exports = BoilerplateDocumentDescriptionAudit;
