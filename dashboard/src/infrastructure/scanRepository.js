import axios from 'axios';

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
    throw new Error('Not Implemented');
  };

  return {
    submit,
    getAll,
  };
};

export default ScanRepository();