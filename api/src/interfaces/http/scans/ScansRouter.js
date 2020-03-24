const { Router } = require('express');
const respondWith = require('../respondWith');
const ScansMongoRepository = require('../../../infrastructure/persistence/mongodb/scans/ScansMongoRepository');
const ScansAPI = require('./ScansAPI');

const scansAPI = new ScansAPI({
  scansRepository: new ScansMongoRepository(),
});

class ScansRouter {
  static create() {
    const router = Router();

    router.post('/scans', respondWith(scansAPI.create.bind(scansAPI)));
    router.get('/scans', respondWith(scansAPI.fetch.bind(scansAPI)));

    return router;
  }
}

module.exports = ScansRouter;