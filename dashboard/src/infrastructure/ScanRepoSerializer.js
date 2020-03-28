import Scan from '../domain/Scan';

const ScanRepoSerializer = {
  toEntity: (scan) => {
    const { id, repositoryName, findings, status, queuedAt, scanningAt, finishedAt } = scan;

    return new Scan({
      id,
      repositoryName,
      findings,
      status,
      queuedAt,
      scanningAt,
      finishedAt,
    });
  },

  toRepository: (scan) => {
    const { id, repositoryName } = scan;

    return {
      id,
      repositoryName,
    };
  }
};

export default ScanRepoSerializer;