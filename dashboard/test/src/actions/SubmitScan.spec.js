import ScanDataBuilder from '../../../src/domain/ScanDataBuilder';
import SubmitScan from '../../../src/actions/SubmitScan';
import scanRepository from '../../../src/infrastructure/scanRepository';

describe('submitScan', () => {
  let submitScan;

  beforeAll(() => {
    scanRepository.submit = jest.fn();
    submitScan = SubmitScan({ scanRepository });
  });

  test('submit a scan entity to scanRepository', async () => {
    const scan = new ScanDataBuilder().withQueuedAt(undefined).build();

    await submitScan({ id: scan.getId(), repositoryName: scan.getRepositoryName() });

    expect(scanRepository.submit).toHaveBeenCalledWith(scan);
  });
});