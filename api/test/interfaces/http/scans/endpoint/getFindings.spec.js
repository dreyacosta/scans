const { request } = require('../../../../specHelper');
const MongoDatabase = require('../../../../../src/infrastructure/persistence/mongodb/MongoDatabase');
const ScansMongoRepository = require('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');
const FindingDataBuilder = require('../../../../../src/domain/scans/FindingDataBuilder');
const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');
const FindingSerializer = require('../../../../../src/interfaces/http/scans/FindingSerializer');

describe('GET /scans/:id/findings', () => {
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

  describe('given three scans with findings', () => {
    let scan;

    beforeEach(async (done) => {
      scan = new ScanDataBuilder();

      for (let index = 0; index < 3; index++) {
        const finding = new FindingDataBuilder().build();
        scan.withFinding(finding);
      }

      scan = scan.build();
      await repository.save(scan);
      done();
    });

    describe('when get findings for specific scan', () => {
      test('get findings', async () => {
        const { body } = await request()
          .get(`/api/v1/scans/${scan.getId()}/findings`)
          .expect('Content-Type', /json/)
          .expect(200);

        expect(body.data).toEqual(scan.getFindings().map(FindingSerializer.toJSON));
      });
    });
  });
});