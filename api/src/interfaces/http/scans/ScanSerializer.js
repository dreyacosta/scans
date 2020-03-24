const ScanSerializer = {
  toJSON(scan) {
    const { id, repositoryName, status, queuedAt } = scan;

    return {
      id,
      repositoryName,
      findings: scan.getFindingsCount(),
      status,
      queuedAt,
    }
  }
};

module.exports = ScanSerializer;