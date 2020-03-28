const ScanDataBuilder = require('../domain/scans/ScanDataBuilder');

class CreateScans {
  constructor({ scansRepository }) {
    this.repository = scansRepository;
  }

  async execute({ number }) {
    await this._batchInsert({
      total: number,
      batchSize: 500,
      iterator: async () => this._createScan(),
    });
  }

  async _createScan() {
    const scan = new ScanDataBuilder()
      .withStatusSuccess()
      .withRandomFindings()
      .build();
    await this.repository.save(scan);
  }

  async _batchInsert({ total, batchSize, iterator }) {
    const inserts = [];
    const currentBatch = (total - batchSize > 0) ? batchSize : total;

    for (let index = 0; index < currentBatch; index++) {
      inserts.push(iterator());
    }
    await Promise.all(inserts);

    if (currentBatch < batchSize) return;

    await this._batchInsert({
      total: total - currentBatch,
      batchSize,
      iterator,
    });
  }
}

module.exports = CreateScans;