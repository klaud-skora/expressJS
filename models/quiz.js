const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('quiz', QuizSchema);