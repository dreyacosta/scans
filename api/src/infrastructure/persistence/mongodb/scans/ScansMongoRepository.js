const ScanMongoModel = require('./ScanMongoModel');
const ScanMongoMapper = require('./ScanMongoMapper');

class ScansMongoRepository {
  constructor() {
    this.ScanMongoModel = ScanMongoModel;
    this.ScanMongoMapper = ScanMongoMapper;
  }

  async save(scan) {
    await this.ScanMongoModel.create(this.ScanMongoMapper.toDatabase(scan));
  }

  async findById(id) {
    const result = await this.ScanMongoModel.findById(id).lean();
    return this.ScanMongoMapper.toEntity(result);
  }

  async findAll() {
    const results = await this.ScanMongoModel.find({}).lean();
    return results.map(this.ScanMongoMapper.toEntity);
  }

  async getFindings(scanId) {
    const result = await this.ScanMongoModel.findById(scanId).lean();
    const scan = this.ScanMongoMapper.toEntity(result);
    return scan.getFindings();
  }
}

module.exports = ScansMongoRepository;