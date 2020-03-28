class Scan {
  constructor({ id, status, repositoryName, findings = 0, timestamp }) {
    this.id = id;
    this.status = status;
    this.repositoryName = repositoryName;
    this.findings = findings;
    this.timestamp = timestamp;
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

  queue() {
    this.status = 'QUEUED';
  }
}

module.exports = Scan;