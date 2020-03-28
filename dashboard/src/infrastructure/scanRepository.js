import axios from 'axios';
import FindingRepoSerializer from './FindingRepoSerializer';
import ScanRepoSerializer from './ScanRepoSerializer';

const ScanRepository = () => {
  const submit = async (scan) => {
    await axios
      .post(`${process.env.API_URL_CLIENT}/scans`, ScanRepoSerializer.toRepository(scan));
  };

  const getAll = async () => {
    const { data: response } = await axios
      .get(`${process.env.API_URL_SERVER}/scans`);

    return response.data.map(ScanRepoSerializer.toEntity);
  };

  const getFindings = async ({ scanId }) => {
    const { data: response } = await axios
      .get(`${process.env.API_URL_SERVER}/scans/${scanId}/findings`);

    return response.data.map(FindingRepoSerializer.toEntity);
  };

  return {
    submit,
    getAll,
    getFindings,
  };
};

export default ScanRepository();