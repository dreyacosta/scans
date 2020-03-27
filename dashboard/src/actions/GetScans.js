const GetScans = ({ scanRepository }) => async () => {
  return await scanRepository.getAll();
};

export default GetScans;