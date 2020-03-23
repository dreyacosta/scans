const { Router } = require('express');
const respondWith = require('../respondWith');
const ScansAPI = require('./ScansAPI');

const scansAPI = new ScansAPI({});

class ScansRouter {
  static create() {
    const router = Router();

    router.post('/scans', respondWith(scansAPI.create.bind(scansAPI)));

    return router;
  }
}

module.exports = ScansRouter;