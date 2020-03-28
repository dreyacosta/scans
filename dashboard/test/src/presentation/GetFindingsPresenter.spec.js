import FindingDataBuilder from '../../../src/domain/FindingDataBuilder';
import GetFindingsPresenter from '../../../src/presentation/GetFindingsPresenter';
import FindingPresenterSerializer from '../../../src/presentation/FindingPresenterSerializer';

describe('GetFindingsPresenter', () => {
  test('returns findings for the view', async () => {
    const findings = [
      new FindingDataBuilder().build(),
      new FindingDataBuilder().build(),
    ];
    const getFindings = jest.fn().mockReturnValue(findings);
    const getFindingsPresenter = GetFindingsPresenter({ getFindings });

    const id = 'an_id';
    const context = {
      query: {
        id,
      },
    };
    const findingsViewResult = await getFindingsPresenter(context);

    expect(getFindings).toHaveBeenCalledWith({ scanId: id });
    expect(findingsViewResult).toEqual({
      props: {
        repository: id,
        findings: findings.map(FindingPresenterSerializer.toJSON),
      }
    });
  });
});