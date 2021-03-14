const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdDt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('news', NewsSchema);