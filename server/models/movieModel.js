// Select one db to work with:

// For SQL
// const sqlDb = require('../../db/sql');
// For Mongo
const mongoDb = require('../../db/mongodb')

module.exports = {
  // Save API data in the DB

  // Get stored data from DB
  let storedMovies = mongoDb.find()
  console.log(`* * * storedMovies in DB:`, storedMovies)
}
