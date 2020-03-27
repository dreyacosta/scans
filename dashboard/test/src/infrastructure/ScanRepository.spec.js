import axios from 'axios';
import scanRepository from '../../../src/infrastructure/scanRepository';
import ScanDataBuilder from '../../../src/domain/ScanDataBuilder';

jest.mock('axios');

describe('ScanRepository', () => {
  test('submit call scan endpoint with given scan', async () => {
    const scan = new ScanDataBuilder().build();

    await scanRepository.submit(scan);

    expect(axios.post).toHaveBeenCalledWith(`${process.env.API_URL_CLIENT}/scans`, {
      id: scan.getId(),
      repositoryName: scan.getRepositoryName(),
    });
  });

  test('submit call scan get endpoint and returns all scans', async () => {
    const scans = [
      new ScanDataBuilder().build(),
      new ScanDataBuilder().build(),
    ];
    axios.get = jest.fn().mockReturnValue({
      data: [
        _scanToJSON(scans[0]),
        _scanToJSON(scans[1]),
      ]
    });

    const scansResult = await scanRepository.getAll();

    expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL_SERVER}/scans`);
    expect(scansResult).toEqual(scans);
  });

  function _scanToJSON(scan) {
    const { id, repositoryName, findings, status, queuedAt, scanningAt, finishedAt } = scan;

    return {
      id,
      repositoryName,
      findings,
      status,
      queuedAt,
      scanningAt,
      finishedAt,
    };
  }
});