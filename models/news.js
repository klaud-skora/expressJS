const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: { type: String, required: [true, 'Type title'] },
  content: { type: String, required: [true, 'Type description'] },
  createdDt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('news', NewsSchema);