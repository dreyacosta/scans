import { v4 } from 'uuid';
import Scan from '../../../src/domain/Scan';
import SubmitScan from '../../../src/actions/SubmitScan';
import scanRepository from '../../../src/infrastructure/scanRepository';

describe('submitScan', () => {
  let submitScan;

  beforeAll(() => {
    scanRepository.submit = jest.fn();
    submitScan = SubmitScan({ scanRepository });
  });

  test('submit a scan entity to scanRepository', async () => {
    const id = v4();
    const repositoryName = 'scans';
    const scan = new Scan({
      id,
      repositoryName,
    });

    await submitScan({ id, repositoryName });

    expect(scanRepository.submit).toHaveBeenCalledWith(scan);
  });
});