const MongoDatabase = require('../../src/infrastructure/persistence/mongodb/MongoDatabase');
const ScansMongoRepository = require('../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');
const CreateScans = require('../../src/actions/CreateScans');

describe('CreateScans', () => {
  const mongo = new MongoDatabase();
  const scansRepository = new ScansMongoRepository();
  const createScans = new CreateScans({ scansRepository });

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

  test('ScansRepository contains the given number of scans', async () => {
    const number = 10;
    await createScans.execute({ number });

    const expectedScans = await scansRepository.findAll();
    expect(expectedScans.length).toEqual(number);
  });
});
