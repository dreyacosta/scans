const Finding = require('./Finding');

class FindingDataBuilder {
  constructor() {
    this.attributes = {
      type: 'sast',
      ruleId: 'G402',
      location: {
        path: 'connectors/apigateway.go',
        positions: {
          begin: {
            line: 60
          }
        }
      },
      metadata: {
        description: 'TLS InsecureSkipVerify set true.',
        severity: 'HIGH'
      }
    };
  }

  build() {
    return new Finding(this.attributes);
  }
}

module.exports = FindingDataBuilder;