require('dotenv').config({path:'../../.env'})
const mongoose = require('mongoose');
const host = process.env.MONG_DB;
console.log(process.env)
mongoose.connect(host, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

module.exports = db

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('db pinged')
});
