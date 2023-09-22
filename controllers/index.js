const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const gamepage = require('./gamepage');

router.use('/', homeRoutes);
router.use('/test', gamepage);
router.use('/api', apiRoutes);

module.exports = router;

