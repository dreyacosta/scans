const TIMESTAMP_MAP = {
  'QUEUED': 'queuedAt',
  'IN_PROGRESS': 'scanningAt',
  'SUCCESS': 'finishedAt',
  'FAILURE': 'finishedAt',
};

class Scan {
  constructor({ id, status, repositoryName, findings = [], queuedAt, scanningAt, finishedAt }) {
    this.id = id;
    this.status = status;
    this.repositoryName = repositoryName;
    this.findings = findings;
    this.queuedAt = queuedAt;
    this.scanningAt = scanningAt;
    this.finishedAt = finishedAt;
  }

  getId () {
    return this.id;
  }

  getRepositoryName() {
    return this.repositoryName;
  }

  getStatus() {
    return this.status;
  }

  getFindings() {
    return this.findings;
  }

  getFindingsCount() {
    return this.findings.length;
  }

  getQueuedAt() {
    return this.queuedAt;
  }

  getTimestamp() {
    const key = TIMESTAMP_MAP[this.status];
    return this[key];
  }

  queue() {
    this.status = 'QUEUED';
    this.queuedAt = Date.now();
  }
}

module.exports = Scan;