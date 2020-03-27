class Finding {
  constructor({ type, ruleId, location, metadata }) {
    this.type = type;
    this.ruleId = ruleId;
    this.location = location;
    this.metadata = metadata;
  }
}

module.exports = Finding;