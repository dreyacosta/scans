import ScanPresenterSerializer from './ScanPresenterSerializer';

const GetScansPresenter = ({ getScans }) => async () => {
  const scans = await getScans();
  return {
    props: {
      scans: scans.map(ScanPresenterSerializer.toJSON),
    },
  };
};

export default GetScansPresenter;