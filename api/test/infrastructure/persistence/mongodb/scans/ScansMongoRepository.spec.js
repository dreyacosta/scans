const MongoDatabase = require('../../../../../src/infrastructure/persistence/mongodb/MongoDatabase');
const FindingDataBuilder = require('../../../../../src/domain/scans/FindingDataBuilder');
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

  describe('given 3 scans', () => {
    let scans;

    beforeEach(async (done) => {
      scans = [];

      for (let index = 0; index < 3; index++) {
        const finding = new FindingDataBuilder().build();
        const scan = new ScanDataBuilder()
          .withFinding(finding)
          .build();
        await repository.save(scan);
        scans.push(scan);
      }

      done();
    });

    describe('when findAll', () => {
      test('gets 3 scans', async () => {
        const scansResult = await repository.findAll();

        const [scanResult1, scanResult2, scanResult3] = scansResult;
        expect(scanResult1.getId()).toEqual(scans[0].getId());
        expect(scanResult2.getId()).toEqual(scans[1].getId());
        expect(scanResult3.getId()).toEqual(scans[2].getId());
      });
    });

    describe('when getFindings for specific scan', () => {
      test('gets findings', async () => {
        const [scan] = scans;
        const findingsResult = await repository.getFindings(scan.getId());

        expect(findingsResult).toEqual(scan.getFindings());
      });
    });
  });
});