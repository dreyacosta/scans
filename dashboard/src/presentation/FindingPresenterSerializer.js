const FindingPresenterSerializer = {
  toJSON: (finding) => {
    const { ruleId, description, severity, path } = finding;

    return {
      ruleId,
      description,
      severity,
      path,
    };
  },
};

export default FindingPresenterSerializer;