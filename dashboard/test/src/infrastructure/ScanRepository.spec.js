import { v4 } from 'uuid';
import axios from 'axios';
import ScanRepository from '../../../src/infrastructure/ScanRepository';
import Scan from '../../../src/domain/Scan';

jest.mock('axios');

describe('ScanRepository', () => {
  const scanRepository = ScanRepository();

  test('submit call scan endpoint with given scan', async () => {
    const id = v4();
    const repositoryName = 'scans';
    const scan = new Scan({
      id,
      repositoryName,
    });

    await scanRepository.submit(scan);

    expect(axios.post).toHaveBeenCalledWith(`${process.env.API_URL_CLIENT}/scans`, {
      id,
      repositoryName,
    });
  });
});