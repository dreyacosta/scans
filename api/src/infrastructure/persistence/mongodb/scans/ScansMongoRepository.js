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
    throw new Error('Not Implemented');
  }
}

module.exports = ScansMongoRepository;