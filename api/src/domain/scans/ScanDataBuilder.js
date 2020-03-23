const faker = require('faker');
const Uuid = require('../shared/Uuid');
const Scan = require('./Scan');

class ScanDataBuilder {
  constructor() {
    this.attributes = {
      id: Uuid.random(),
      status: 'queued',
      repositoryName: faker.lorem.word(),
      findings: [],
      queuedAt: Date.now(),
      scanningAt: null,
      finishedAt: null,
    };
  }

  withFinding(finding) {
    this.attributes.findings.push(finding);
    return this;
  }

  build() {
    return new Scan(this.attributes);
  }
}

module.exports = ScanDataBuilder;