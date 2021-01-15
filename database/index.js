const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/carouselDB';

const db = mongoose.connect(mongoUri, { userNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log('Problem connecting to MongoDB'));

module.exports = db;
