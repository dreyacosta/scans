import faker from 'faker';
import { v4 } from 'uuid';
import Scan from './Scan';

class ScanDataBuilder {
  constructor() {
    this.attributes = {
      id: v4(),
      status: 'queued',
      repositoryName: faker.lorem.word(),
      findings: [],
      queuedAt: Date.now(),
      scanningAt: undefined,
      finishedAt: undefined,
    };
  }

  withFinding(finding) {
    this.attributes.findings.push(finding);
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