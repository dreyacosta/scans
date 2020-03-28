import axios from 'axios';
import scanRepository from '../../../src/infrastructure/scanRepository';
import FindingRepoSerializer from '../../../src/infrastructure/FindingRepoSerializer';
import ScanDataBuilder from '../../../src/domain/ScanDataBuilder';
import FindingDataBuilder from '../../../src/domain/FindingDataBuilder';

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
      data: {
        data: [
        _scanToJSON(scans[0]),
        _scanToJSON(scans[1]),
        ]
      }
    });

    const scansResult = await scanRepository.getAll();

    expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL_SERVER}/scans`);
    expect(scansResult).toEqual(scans);
  });

  test('submit call findings for specific scan and return all findings', async () => {
    const findings = [
      new FindingDataBuilder().build(),
      new FindingDataBuilder().build(),
    ];
    axios.get = jest.fn().mockReturnValue({
      data: {
        data: [
          FindingRepoSerializer.toJSON(findings[0]),
          FindingRepoSerializer.toJSON(findings[1]),
        ]
      }
    });

    const scanId = 24;
    const findingsResult = await scanRepository.getFindings({ scanId });

    expect(axios.get).toHaveBeenCalledWith(`${process.env.API_URL_SERVER}/scans/${scanId}/findings`);
    expect(findingsResult).toEqual(findings);
  });

  function _scanToJSON(scan) {
    const { id, repositoryName, findings, status, timestamp } = scan;

    return {
      id,
      repositoryName,
      findings,
      status,
      timestamp,
    };
  }
});