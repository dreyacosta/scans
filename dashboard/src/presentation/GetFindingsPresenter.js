import FindingPresenterSerializer from './FindingPresenterSerializer';

const GetFindingsPresenter = ({ getFindings }) => async (context) => {
  const { id } = context.query;

  const findings = await getFindings({ scanId: id });
  return {
    props: {
      repository: id,
      findings: findings.map(FindingPresenterSerializer.toJSON),
    },
  };
};

export default GetFindingsPresenter;