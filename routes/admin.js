const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.render('admin', { admin: 'Admin' })
  res.redirect('/login');
});

module.exports = router;