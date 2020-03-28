const ScanPresenterSerializer = {
  toJSON: (scan) => {
    const { id, repositoryName, status, findings, timestamp } = scan;

    return {
      id,
      repositoryName,
      status,
      findings,
      timestamp: new Date(timestamp).toISOString(),
    };
  },
};

export default ScanPresenterSerializer;