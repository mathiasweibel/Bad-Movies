// Select one db to work with:

// For SQL
// const sqlDb = require('../../db/sql');
// For Mongo
const { db, Movie } = require('../../db/mongodb')

module.exports = {
  // Save API data in the DB
  save: ({title, rating, img, descr, year}) => {
    // apiData.genres or apiData
    // let update = {
    //   title,
    //   rating,
    //   img,
    //   descr
    // }
    let options = {
      upsert: true
    }
    let movieToSave = new Movie({
      title: title,
      rating: rating,
      img: img,
      descr: descr,
      year: year
    })
    Movie.createAsync(movieToSave)
    // db.movieObj.create(movieObj, (err) => {
    //   if (err) console.log(`! ERR: models.save | movie: ${movieObj.title}`, err)
    // })
  },

  // Get stored data from DB
  retrieve: ({ title }) => {
    let storedMovies = db.movies.find({ title })
    next(storedMovies)
    console.log(`$$ storedMovies in DB:`, storedMovies)
    res.send(storedMovies)
  },

  delete: ({ title }) => {
    Movie.findOneAndDelete({ title })
  }
}
