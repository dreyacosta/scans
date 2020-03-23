const Scan = require('../../../domain/scans/Scan');
const ScanSerializer = require('./ScanSerializer');

class ScansAPI {
  constructor({ scansRepository }) {
    this.repository = scansRepository;
  }

  async create(request) {
    const scan = this._scanFrom(request);

    await this.repository.save(scan);

    return {};
  }

  _scanFrom(request) {
    const { id, repositoryName } = request.body;

    return new Scan({
      id,
      repositoryName,
      status: 'queued',
      queuedAt: Date.now(),
    });
  }
}

module.exports = ScansAPI;