const ScanPresenterSerializer = {
  toJSON: (scan) => {
    const { id, repositoryName, status, findings } = scan;

    return {
      id,
      repositoryName,
      status,
      findings,
    };
  },
};

export default ScanPresenterSerializer;