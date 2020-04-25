const Promise = require('bluebird')
const mongoose = Promise.promisifyAll(require('mongoose'))

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost/badmovies', { useNewUrlParser: true })
}

const db = mongoose.connection

mongoose.Promise = Promise
db.on('error', console.error.bind(console, '* * * Connection error:'))
db.once('open', () => {
  console.log(`# Connected to db`)
})

// Schema
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: String, required: true },
  img: { type: String, required: true },
  descr: { type: String, required: false },
  year: {type: String, required: false }
})

const Movie = mongoose.model('Movie', movieSchema)
// Mongoose compiles a 'Movie' model and looks for the 'movies' collection

module.exports = {
  db,
  Movie
}

// Schema Notes
// Need to store favorite movie
// 
