'use strict';
const path = require('path');
const lighthouseDir = path.dirname(require.resolve('lighthouse'));
const dirs = {
  audits: path.join(__dirname, 'audits'),
  gatherers: path.join(__dirname, 'gather', 'gatherers'),
  lighthouseAudits: path.join(lighthouseDir, 'audits'),
  lighthouseGatherers: path.join(lighthouseDir, 'gather', 'gatherers'),
};
const addDirFiles = (dirname, basenames) => basenames.map(basename => path.join(dirname, basename));

module.exports = {
  // Add gatherer to the default Lighthouse load ('pass') of the page.
  passes: [{
    passName: 'defaultPass',
    gatherers: [
      ...addDirFiles(dirs.gatherers, [
        'boilerplate-document-description',
      ]),
      ...addDirFiles(dirs.lighthouseGatherers, [
        'accessibility',
      ])
    ]
  }],

  // Add custom audit to the list of audits 'lighthouse:default' will run.
  audits: [
    ...addDirFiles(dirs.audits, [
      'boilerplate-document-description',
    ]),
    ...addDirFiles(dirs.lighthouseAudits, [
      'accessibility/document-title',
    ])
  ],

  // Add custom sections to the default report.
  categories: {
    boilerplate: {
      name: 'Boilerplate',
      description: 'Scores for some of the best practices for boilerplate',
      audits: [
        // When we add more custom audits, `weight` controls how they're averaged together.
        {id: 'document-title', weight: 1},
        {id: 'boilerplate-document-description', weight: 1},
      ]
    }
  }
};
