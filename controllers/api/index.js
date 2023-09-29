const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
// const highScoreRoutes = require('./highScoreRoutes')

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
// router.use('./highscores', highScoreRoutes);


module.exports = router;
