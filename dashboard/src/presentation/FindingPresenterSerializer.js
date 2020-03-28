const FindingPresenterSerializer = {
  toJSON: (finding) => {
    const { ruleId, metadata, location } = finding;

    return {
      ruleId,
      description: metadata.description,
      severity: metadata.severity,
      pathName: location.path,
      lineNumber: location.positions.begin.line,
    };
  },
};

export default FindingPresenterSerializer;