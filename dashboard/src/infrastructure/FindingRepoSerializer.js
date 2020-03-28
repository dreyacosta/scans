import Finding from '../domain/Finding';

const FindingRepoSerializer = {
  toEntity: (finding) => {
    const { ruleId, description, severity, path } = finding;

    return new Finding({
      ruleId,
      description,
      severity,
      path,
    });
  },

  toJSON: (finding) => {
    const { ruleId, description, severity, path } = finding;

    return {
      ruleId,
      description,
      severity,
      path,
    };
  }
};

export default FindingRepoSerializer;