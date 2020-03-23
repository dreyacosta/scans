const { request } = require('../../../../specHelper');
const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');

describe('POST /scans', () => {
  test('creates a new scan', async () => {
    const { id, repositoryName } = new ScanDataBuilder().build();

    await request()
      .post('/api/v1/scans')
      .send({
        id,
        repositoryName,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});