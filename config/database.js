const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect(
  process.env.DATABASE_URL,
  { useMongoClient: true }
).then(db => {
  console.log(`Connected to: ${process.env.DATABASE_URL}`);
});
