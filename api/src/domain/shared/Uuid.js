const uuid = require('uuid');

class Uuid {
  static random() {
    return uuid.v4();
  }
}

module.exports = Uuid;