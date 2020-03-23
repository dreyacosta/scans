const faker = require('faker');
const Uuid = require('../shared/Uuid');
const FindingDataBuilder = require('./FindingDataBuilder');
const Scan = require('./Scan');

class ScanDataBuilder {
  constructor() {
    this.attributes = {
      id: Uuid.random(),
      status: 'queued',
      repositoryName: faker.lorem.word(),
      findings: [
        new FindingDataBuilder().build(),
      ],
      queuedAt: Date.now(),
      scanningAt: null,
      finishedAt: null,
    };
  }

  build() {
    return new Scan(this.attributes);
  }
}

module.exports = ScanDataBuilder;