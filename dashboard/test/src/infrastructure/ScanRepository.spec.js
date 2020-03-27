import { v4 } from 'uuid';
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
});