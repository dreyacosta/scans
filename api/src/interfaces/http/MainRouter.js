const { Router } = require('express');
const methodOverride = require('method-override');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const ScansRouter = require('./scans/ScansRouter');

class MainRouter {
  static create() {
    const router = Router();

    router
      .use(methodOverride('X-HTTP-Method-Override'))
      .use(cors())
      .use(bodyParser.json())
      .use(compression());

    router.use('/api/v1', ScansRouter.create());

    return router;
  }
}

module.exports = MainRouter;