const { request } = require('../../../../specHelper');
const MongoDatabase = require('../../../../../src/infrastructure/persistence/mongodb/MongoDatabase');
const ScansMongoRepository = require('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');
const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');

describe('POST /scans', () => {
  const mongo = new MongoDatabase();
  const repository = new ScansMongoRepository();

  beforeAll(async (done) => {
    await mongo.start();
    done();
  });
  beforeEach(async (done) => {
    await mongo.clean();
    done();
  });
  afterAll(async (done) => {
    await mongo.drop();
    await mongo.close();
    done();
  });

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

    const scanResult = await repository.findById(id);
    expect(scanResult.getId()).toEqual(id);
    expect(scanResult.getRepositoryName()).toEqual(repositoryName);
  });
});