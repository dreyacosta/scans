class Scan {
  constructor({ id, status, repositoryName, findings = 0, queuedAt, scanningAt, finishedAt }) {
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

  getQueuedAt() {
    return this.queuedAt;
  }
}

module.exports = Scan;