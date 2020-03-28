import Scan from '../domain/Scan';

const ScanRepoSerializer = {
  toEntity: (scan) => {
    const { id, repositoryName, findings, status, timestamp } = scan;

    return new Scan({
      id,
      repositoryName,
      findings,
      status,
      timestamp,
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