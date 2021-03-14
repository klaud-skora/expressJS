const express = require('express');

const News = require('../models/news'); 

const router = express.Router();

router.all('*', (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('/login');
    return;
  }

  next();
});

router.get('/', (req, res, next) => {
  res.render('admin', { admin: 'Admin' })
});

module.exports = router;