const { Schema, model } = require('mongoose');

const findingSchema = new Schema({
  type: {
    type: String,
  },
  ruleId: {
    type: String,
  },
  location: {},
  metadata: {},
});

const scanSchema = new Schema({
  _id: String,
  status: {
    type: String,
  },
  repositoryName: {
    type: String,
  },
  findings: {
    type: [findingSchema],
  },
  queuedAt: {
    type: Date,
  },
  scanningAt: {
    type: Date,
  },
  finishedAt: {
    type: Date,
  },
});

module.exports = model('Scan', scanSchema);