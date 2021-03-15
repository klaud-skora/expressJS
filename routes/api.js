const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.get('/', (req, res, next) => {

  const search = req.query.search || '';
  const sort = (req.query.sort !== -1 && req.query.sort !== -1) ? -1 : req.query.sort;

  const news = News
    .find({ title: new RegExp(search.trim(), 'i') })
    .sort({ created: sort })
    .select('_id title content');

    news.exec((err, data) => {
    res.json(data);
  });

});
router.get('/:id', (req, res, next) => {

  const news = News.findById(req.params.id).select('_id title content');

  news.exec((err, data) => {
    res.json(data);
  });

});

module.exports = router;