import Scan from '../domain/Scan';

const SubmitScan = ({ scanRepository }) => async({ id, repositoryName }) => {
  const scan = new Scan({
    id,
    repositoryName,
  });

  await scanRepository.submit(scan);
};

export default SubmitScan;