import ScanDataBuilder from '../../../src/domain/ScanDataBuilder';
import scanRepository from '../../../src/infrastructure/scanRepository';
import GetScans from '../../../src/actions/GetScans';

describe('GetScans', () => {
  test('returns all scans from scanRepository', async () => {
    const scans = [
      new ScanDataBuilder().build(),
      new ScanDataBuilder().build(),
    ];
    scanRepository.getAll = jest.fn().mockReturnValue(scans);
    const getScans = GetScans({ scanRepository });

    const scansResult = await getScans();

    expect(scansResult).toEqual(scans);
  });
});