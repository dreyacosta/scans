import faker from 'faker';
import { v4 } from 'uuid';
import Scan from './Scan';

class ScanDataBuilder {
  constructor() {
    this.attributes = {
      id: v4(),
      status: 'queued',
      repositoryName: faker.lorem.word(),
      findings: 0,
      queuedAt: Date.now(),
      scanningAt: undefined,
      finishedAt: undefined,
    };
  }

  withFindings(findings) {
    this.attributes.findings = findings;
    return this;
  }

  withQueuedAt(queuedAt) {
    this.attributes.queuedAt = queuedAt;
    return this;
  }

  build() {
    return new Scan(this.attributes);
  }
}

module.exports = ScanDataBuilder;