const models = require('../models/movieModel.js')
const api = require('../helpers/apiHelpers.js')
// const bodyParser = require('body-parser')

// Return requests to the client
module.exports = {
  getGenres: (req, res) => {
    console.log(`$$ controller getGenres() | req.body`, req.body)
    api.getGenres(req, res)
  },
  getSearch: (req, res, genreId) => {
    console.log(`$$ controller getSearch() | genreId`, genreId)
    api.getMoviesByGenre(req, res, genreId)
  },
  saveMovie: (req, res) => {
    console.log(`$$ controller saveMovie() | req.body.params.movie`, req.body.params.movie)
    let movieObj = req.body.params.movie
    models.save(movieObj)
  },
  retrieveMovie: (req, res) => {
    console.log(`$$ controller retrieveMovie() | req.body`, req.body)
    // let movieTitle = req.body.results.title
    // models.retrieve({ title: movieTitle })
  },
  deleteMovie: (req, res, movieObj) => {
    console.log(`$$ controller deleteMovie() | req.body`, req.body)
    models.delete(movieObj)
  }
}
