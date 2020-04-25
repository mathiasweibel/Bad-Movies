// Select one db to work with:

// For SQL
// const sqlDb = require('../../db/sql');
// For Mongo
const { db, Movie } = require('../../db/mongodb')

module.exports = {
  // Save API data in the DB
  save: (req, res, { id, vote_average, title, release_date, overview, poster_path }) => {
    let options = {
      upsert: true
    }
    let movieToSave = new Movie({
      id: id,
      title: title,
      rating: vote_average,
      img: poster_path,
      descr: overview,
      year: release_date
    })
    Movie.createAsync(movieToSave)
      .then(output => {
        console.log(`::: Movie.createAsync | output:`, output)
        res.send(201)
      })
      .catch(err => {
        console.log(`! ERR | Movie.createAsync:`, err)
      })
  },

  // Get stored data from DB
  retrieve: ({ title }) => {
    let storedMovies = Movie.find()
    console.log(`::: Movie.retrieve storedMovies:`, storedMovies)
    res.send(storedMovies)
  },

  delete: (movieObj) => {
    Movie.findOneAndDelete(movieObj)
  }
}
