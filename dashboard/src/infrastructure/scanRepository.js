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

  return {
    submit,
  };
};

export default ScanRepository();