import axios from 'axios';
import Scan from '../domain/Scan';

const ScanSerializer = {
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
};

const ScanRepository = () => {
  const submit = async (scan) => {
    const { id, repositoryName } = scan;

    await axios
      .post(`${process.env.API_URL_CLIENT}/scans`, {
        id,
        repositoryName,
      });
  };

  const getAll = async () => {
    const { data } = await axios
      .get(`${process.env.API_URL_SERVER}/scans`);

    return data.map(ScanSerializer.toEntity);
  };

  const getFindings = async ({ scanId }) => {
    throw new Error('Not Implemented');
  };

  return {
    submit,
    getAll,
    getFindings,
  };
};

export default ScanRepository();