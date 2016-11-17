var mongoose = require('mongoose');

module.exports = mongoose.model('Review', {
  name: String,
  food: String,
  restaurant: String,
  price: Number,
  img: String
});
