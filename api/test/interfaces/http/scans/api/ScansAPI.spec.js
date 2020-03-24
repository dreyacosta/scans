const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');
const ScansAPI = require('../../../../../src/interfaces/http/scans/ScansAPI');
const ScansMongoRepository = require('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');

jest.mock('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');

describe('ScansAPI', () => {
  let scan;
  let scan2;
  let scans;
  let scansMongoRepository;
  let request;
  let scansAPI;

  beforeEach(() => {
    scan = new ScanDataBuilder().build();
    scan2 = new ScanDataBuilder().build();
    scans = [scan, scan2];
    ScansMongoRepository.prototype.save = jest.fn().mockReturnValue(scan);
    ScansMongoRepository.prototype.findAll = jest.fn().mockReturnValue(scans);
    scansMongoRepository = new ScansMongoRepository();

    request = {
      body: {
        id: scan.id,
        repositoryName: scan.repositoryName,
      },
    };

    scansAPI = new ScansAPI({
      scansRepository: scansMongoRepository,
    });
  });

  describe('create', () => {
    test('queries ScansRepository', async () => {
      await scansAPI.create(request);

      expect(scansMongoRepository.save).toHaveBeenCalled();
    });
  });

  describe('get', () => {
    test('queries ScansRepository findAll', async () => {
      await scansAPI.fetch({});

      expect(scansMongoRepository.findAll).toHaveBeenCalled();
    });

    test('returns 2 scans', async () => {
      const { data } = await scansAPI.fetch({});

      const [scanResult1, scanResult2] = data;
      expect(scanResult1.id).toEqual(scan.getId());
      expect(scanResult1.status).toEqual(scan.getStatus());
      expect(scanResult2.id).toEqual(scan2.getId());
      expect(scanResult2.status).toEqual(scan2.getStatus());
    });
  });
});
