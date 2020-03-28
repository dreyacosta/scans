const faker = require('faker');
const Finding = require('./Finding');

class FindingDataBuilder {
  constructor() {
    this.attributes = {
      type: faker.system.fileType(),
      ruleId: `${faker.random.number()}`,
      location: {
        path: faker.fake("path/{{system.fileName}}"),
        positions: {
          begin: {
            line: faker.random.number(),
          },
        },
      },
      metadata: {
        description: faker.hacker.phrase(),
        severity: 'HIGH',
      },
    };
  }

  build() {
    return new Finding(this.attributes);
  }
}

module.exports = FindingDataBuilder;