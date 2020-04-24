// Select one db to work with:

// For SQL
// const sqlDb = require('../../db/sql');
// For Mongo
const mongoDb = require('../../db/mongodb')

module.exports = {
  // Save API data in the DB
  save: (input) => {
    // apiData.genres or apiData
    // const dataSaved = 
  },

  // Get stored data from DB
  retrieve: (coll) => {
    //
    let storedMovies = mongoDb.coll.find()
    console.log(`* * * storedMovies in DB:`, storedMovies)
  },

  delete: (document) => {
    //
  }
}
