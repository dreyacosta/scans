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

  getFindingsCount() {
    return this.findings.length;
  }

  getQueuedAt() {
    return this.queuedAt;
  }
}

module.exports = Scan;