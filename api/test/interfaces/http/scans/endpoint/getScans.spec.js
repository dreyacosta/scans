const { request } = require('../../../../specHelper');
const MongoDatabase = require('../../../../../src/infrastructure/persistence/mongodb/MongoDatabase');
const ScansMongoRepository = require('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');
const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');

describe('GET /scans', () => {
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

  describe('given three scans', () => {
    let scans = [];

    beforeEach(async (done) => {
      for (let index = 0; index < 3; index++) {
        const scan = new ScanDataBuilder().build();
        await repository.save(scan);
        scans.push(scan);
      }
      done();
    });

    describe('when get scans', () => {
      test('get three scans', async () => {
        const { body } = await request()
          .get('/api/v1/scans')
          .expect('Content-Type', /json/)
          .expect(200);

        expect(body.data[0].id).toEqual(scans[0].getId());
        expect(body.data[1].id).toEqual(scans[1].getId());
        expect(body.data[2].id).toEqual(scans[2].getId());
      });
    });
  });
});