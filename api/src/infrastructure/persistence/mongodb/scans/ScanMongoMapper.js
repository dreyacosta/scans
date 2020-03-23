const Scan = require('../../../../domain/scans/Scan');
const Finding = require('../../../../domain/scans/Finding');

const ScanMongoMapper = {
  toEntity(scan) {
    const { _id, status, repositoryName, findings, queuedAt, scanningAt, finishedAt } = scan;

    return new Scan({
      id: _id,
      status,
      repositoryName,
      findings: findings.map((finding) => {
        return new Finding({
          type: finding.type,
          ruledId: finding.ruleId,
          location: finding.location,
          metadata: finding.metadata,
        });
      }),
      queuedAt: Date.parse(queuedAt),
      scanningAt,
      finishedAt,
    });
  },

  toDatabase(scan) {
    const { id, status, repositoryName, findings, queuedAt, scanningAt, finishedAt } = scan;

    return {
      _id: id,
      status,
      repositoryName,
      findings: findings.map((finding) => {
        return {
          type: finding.type,
          ruledId: finding.ruleId,
          location: finding.location,
          metadata: finding.metadata,
        };
      }),
      queuedAt,
      scanningAt,
      finishedAt,
    };
  },
};

module.exports = ScanMongoMapper;