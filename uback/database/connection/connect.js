require('dotenv').config({path:'../../.env'})
const mongoose = require('mongoose');
const host = "mongodb://"+process.env.DB_U+":"+process.env.DB_P+"@"+process.env.DB_H;
mongoose.connect(host, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('db pinged')
});
