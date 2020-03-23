const MongoDatabase = require('../../../../../src/infrastructure/persistence/mongodb/MongoDatabase');
const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');
const ScansMongoRepository = require('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');

describe('ScansMongoRepository', () => {
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

  test('save new scan', async () => {
    const scan = new ScanDataBuilder().build();

    await repository.save(scan);

    const scanResult = await repository.findById(scan.id);

    expect(scanResult.getId()).toEqual(scan.getId());
    expect(scanResult.getStatus()).toEqual(scan.getStatus());
    expect(scanResult.getRepositoryName()).toEqual(scan.getRepositoryName());
  });
});