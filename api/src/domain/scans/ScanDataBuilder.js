const faker = require('faker');
const Uuid = require('../shared/Uuid');
const Scan = require('./Scan');
const FindingDataBuilder = require('./FindingDataBuilder');

class ScanDataBuilder {
  constructor() {
    this.attributes = {
      id: Uuid.random(),
      status: 'QUEUED',
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
    this.attributes.status = 'SUCCESS';
    return this;
  }

  withRandomFindings() {
    const number = faker.random.number(20);
    for (let index = 0; index < number; index++) {
      this.attributes.findings.push(new FindingDataBuilder().build());
    }
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