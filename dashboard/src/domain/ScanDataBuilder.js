import faker from 'faker';
import { v4 } from 'uuid';
import Scan from './Scan';

class ScanDataBuilder {
  constructor() {
    this.attributes = {
      id: v4(),
      status: 'QUEUED',
      repositoryName: faker.lorem.word(),
      findings: 0,
      timestamp: Date.now(),
    };
  }

  withFindings(findings) {
    this.attributes.findings = findings;
    return this;
  }

  withTimestamp(timestamp) {
    this.attributes.timestamp = timestamp;
    return this;
  }

  build() {
    return new Scan(this.attributes);
  }
}

module.exports = ScanDataBuilder;