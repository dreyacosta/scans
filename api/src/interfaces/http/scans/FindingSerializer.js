const FindingSerializer = {
  toJSON(finding) {
    const { type, ruleId, location, metadata } = finding;

    return {
      type,
      ruleId,
      location,
      metadata,
    }
  }
};

module.exports = FindingSerializer;