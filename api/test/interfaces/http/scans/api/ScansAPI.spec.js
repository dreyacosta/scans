const ScanDataBuilder = require('../../../../../src/domain/scans/ScanDataBuilder');
const ScansAPI = require('../../../../../src/interfaces/http/scans/ScansAPI');
const ScansMongoRepository = require('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');

jest.mock('../../../../../src/infrastructure/persistence/mongodb/scans/ScansMongoRepository');

describe('ScansAPI', () => {
  let scan;
  let scansMongoRepository;
  let request;
  let scansAPI;

  beforeEach(() => {
    scan = new ScanDataBuilder().build();
    ScansMongoRepository.prototype.save = jest.fn().mockReturnValue(scan);
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

    test('returns json with scan created', async () => {
      const { data: expectedScan } = await scansAPI.create(request);

      expect(expectedScan.id).toEqual(scan.getId());
      expect(expectedScan.repositoryName).toEqual(scan.getRepositoryName());
      expect(expectedScan.status).toEqual(scan.getStatus());
      expect(expectedScan.findings).toEqual(scan.getFindingsCount());
    });
  });
});
