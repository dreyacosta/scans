const Scan = require('../../../domain/scans/Scan');
const ScanSerializer = require('./ScanSerializer');
const FindingSerializer = require('./FindingSerializer');

class ScansAPI {
  constructor({ scansRepository }) {
    this.repository = scansRepository;
  }

  async create(request) {
    const scan = this._scanFrom(request);

    await this.repository.save(scan);

    return {};
  }

  async fetch() {
    const scans = await this.repository.findAll();
    return {
      data: scans.map(ScanSerializer.toJSON),
    };
  }

  async getFindings(request) {
    const { id } = request.params;
    const findings = await this.repository.getFindings(id);
    return {
      data: findings.map(FindingSerializer.toJSON),
    };
  }

  _scanFrom(request) {
    const { id, repositoryName } = request.body;

    const scan = new Scan({
      id,
      repositoryName,
    });
    scan.queue();
    return scan;
  }
}

module.exports = ScansAPI;