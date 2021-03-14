const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('news', { admin: req.session.admin });
});

router.get('/add', (req, res, next) => {
  res.render('addNews');
});

module.exports = router;
