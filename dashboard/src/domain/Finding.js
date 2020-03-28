class Finding {
  constructor({ ruleId, description, severity, path }) {
    this.ruleId = ruleId;
    this.description = description;
    this.severity = severity;
    this.path = path;
  }
}

module.exports = Finding;