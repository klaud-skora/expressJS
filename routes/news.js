const express = require('express');
const News = require('../models/news');

const router = express.Router();

router.get('/', (req, res, next) => {
  const search = req.query.search || '';
  const all = News
  .find({ title: new RegExp(search.trim(), 'i') })
  .sort({ createdDt: -1 });
  all.exec((err, data) => {
    res.render('news', { admin: req.session.admin, allNews: data, searchString: search });
  });


  // News.find({}, (err, data) => {
  // });
});

router.get('/add', (req, res, next) => {
  if (!req.session.admin) res.redirect('news');
  res.render('addNews');
});

router.post('/add', (req, res) => {

  const { title, content } = req.body;

  const newDocument = new News({
    title, 
    content,
  });

  const errors = newDocument.validateSync();

  if (errors) {
    res.render('addNews', { errors, title, content });
    return;
  }

  newDocument.save((err) => {
    console.log(err);
    if (!err) {
      res.redirect('/news');
    }
    else {
      res.render('addNews', { errors: { errors: ['Could not connect to db, sth went wrong'] }, title, content });
      return;
    }
  });
  
});

router.get('/delete/:id', (req, res, next) => {

  News.findByIdAndDelete(req.params.id, (err) => {

    res.redirect('/news');

  });

});

module.exports = router;
