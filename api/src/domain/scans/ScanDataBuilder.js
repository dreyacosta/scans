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
      queuedAt: faker.date.past(),
      scanningAt: null,
      finishedAt: null,
    };
  }

  withStatusSuccess() {
    this.attributes.scanningAt = faker.date.past();
    this.attributes.finishedAt = faker.date.past();
    this.attributes.status = 'success';
    return this;
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