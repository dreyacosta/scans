class Scan {
  constructor({ id, status, repositoryName, findings, queuedAt, scanningAt, finishedAt }) {
    this.id = id;
    this.status = status;
    this.repositoryName = repositoryName;
    this.findings = findings;
    this.queuedAt = queuedAt;
    this.scanningAt = scanningAt;
    this.finishedAt = finishedAt;
  }
}

module.exports = Scan;