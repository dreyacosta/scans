import axios from 'axios';
import Scan from '../domain/Scan';
import Finding from '../domain/Finding';

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

const FindingSerializer = {
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
    const { data: response } = await axios
      .get(`${process.env.API_URL_SERVER}/scans`);

    return response.data.map(ScanSerializer.toEntity);
  };

  const getFindings = async ({ scanId }) => {
    const { data: response } = await axios
      .get(`${process.env.API_URL_SERVER}/scans/${scanId}/findings`);

    return response.data.map(FindingSerializer.toEntity);
  };

  return {
    submit,
    getAll,
    getFindings,
  };
};

export default ScanRepository();