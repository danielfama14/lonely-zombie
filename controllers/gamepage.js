const router = require('express').Router();
router.get('/gamepage', async (req, res) => {
    try {
  
  
      // Pass serialized data and session flag into template
      res.render("gamepage", {
        logged_in: req.session.logged_in 
      } );
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;