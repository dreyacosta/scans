const GetFindings = ({ scanRepository }) => async ({ scanId }) => {
  return await scanRepository.getFindings({ scanId });
};

export default GetFindings;