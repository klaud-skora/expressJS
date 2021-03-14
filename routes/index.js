const express = require('express');
const router = express.Router();

const loginSet = 'admin';
const passwordSet = 'admin';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res) => {

  res.render('login', { header: 'Enter your login and password to login' });

});

router.post('/login', (req, res) => {
  const { login, password } = req.body;
  
  if (login === loginSet && password === passwordSet) {
    req.session.admin = 1;
    res.redirect('/admin');
  } else res.render('login', { header: 'Enter your login and password to login', error: "Used data is not correct" });

});

module.exports = router;
