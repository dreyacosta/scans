const ScanPresenterSerializer = {
  toJSON: (scan) => {
    const { id, repositoryName, status, findings, queuedAt } = scan;

    return {
      id,
      repositoryName,
      status,
      findings,
      queuedAt: new Date(queuedAt).toISOString(),
    };
  },
};

export default ScanPresenterSerializer;