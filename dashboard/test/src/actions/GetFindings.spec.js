import FindingDataBuilder from '../../../src/domain/FindingDataBuilder';
import scanRepository from '../../../src/infrastructure/scanRepository';
import GetFindings from '../../../src/actions/GetFindings';

describe('GetFindings', () => {
  test('returns all findings for specific scan from scanRepository', async () => {
    const findings = [
      new FindingDataBuilder().build(),
      new FindingDataBuilder().build(),
    ];
    scanRepository.getFindings = jest.fn().mockReturnValue(findings);
    const getFindings = GetFindings({ scanRepository });

    const scanId = 23;
    const findingsResult = await getFindings({ scanId });

    expect(scanRepository.getFindings).toHaveBeenCalledWith({ scanId });
    expect(findingsResult).toEqual(findingsResult);
  });
});