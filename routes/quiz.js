const express = require('express');
const Quiz = require('../models/quiz');
const router = express.Router();

router.get('/', (req, res, next) => {

  const isVoted = req.session.vote ? true : false;
  
  Quiz.find({}, (err, data) => {
    let sum = 0;
    data.forEach((item) => {
      sum += item.votes;
    })
    res.render('quiz', { quiz: 'Quiz', data: err ? {} : data, isVoted, sum });
  });

})

router.post('/', (req, res) => {

  Quiz.findOne({ _id: req.body.answer }, (err, data) => {
    data.votes = data.votes + 1;

    data.save((err) => {
      if (!err) {
        req.session.vote = 1;
        res.redirect('/quiz');
      }
    });

  });

});

module.exports = router;