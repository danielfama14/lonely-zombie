const router = require('express').Router();
const { High_score, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const highScoreData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const highScores = highScoreData.map((high_score) => high_score.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      highScores, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/highscores/:id', async (req, res) => {
//   try {
//     const highScoreData = await High_score.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const highScore = highScoreData.get({ plain: true });

//     res.render('profile', {
//       ...highScore,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  console.log('profileRoute');
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
    console.log(userData)

    const highestScores = await User.findAll({
      attributes: ['name', 'high_score'], 
      limit: 10, 
      order: [['high_score', 'DESC']],
    });
    console.log(highestScores);

    const highestScoreArray = highestScores.map(user => user.get({ plain: true }));
    // console.log(highestScore);
    // const user = userData.get({ plain: true });
    // console.log(user);
    res.render('profile', {
      // ...user,
      highestScore: highestScoreArray,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;