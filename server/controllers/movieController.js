const movieModel = require('../models/movieModel.js')
const api = require('../helpers/apiHelpers.js')

// Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    api.getMoviesByGenre(req, res)
    console.log(`$ controller getSearch() | req.body`, req.body)
  },
  getGenres: (req, res) => {
    console.log(`$ controller getGenres() | req.body`, req.body)
    api.getGenres(req, res)
  },
  saveMovie: (req, res) => {
    console.log(`$ controller saveMovie() | req.body`, req.body)
    models.save(req.body)
  },
  deleteMovie: (req, res) => {
    console.log(`$ controller deleteMovie() | req.body`, req.body)

  }
}

