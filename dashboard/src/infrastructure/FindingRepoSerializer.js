import Finding from '../domain/Finding';

const FindingRepoSerializer = {
  toEntity: (finding) => {
    const { type, ruleId, location, metadata } = finding;

    return new Finding({
      type,
      ruleId,
      location,
      metadata,
    });
  },
};

export default FindingRepoSerializer;