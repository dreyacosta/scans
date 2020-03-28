import Finding from './Finding';

class FindingDataBuilder {
  constructor() {
    this.attributes = {
      ruleId: 'G402',
      description: 'TLS InsecureSkipVerify set true.',
      severity: 'HIGH',
      path: 'connectors/apigateway.go : 60',
    };
  }

  build() {
    return new Finding(this.attributes);
  }
}

module.exports = FindingDataBuilder;