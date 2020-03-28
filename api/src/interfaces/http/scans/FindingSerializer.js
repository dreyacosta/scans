const FindingSerializer = {
  toJSON(finding) {
    const { ruleId, location, metadata } = finding;

    return {
      ruleId,
      description: metadata.description,
      severity: metadata.severity,
      path: `${location.path} : ${location.positions.begin.line}`,
    };
  }
};

module.exports = FindingSerializer;