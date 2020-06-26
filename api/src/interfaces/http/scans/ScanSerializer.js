const ScanSerializer = {
  toJSON(scan) {
    const { id, repositoryName, status } = scan;

    return {
      id,
      repositoryName,
      findings: scan.getFindingsCount(),
      status,
      timestamp: scan.getTimestamp(),
    };
  }
};

module.exports = ScanSerializer;
