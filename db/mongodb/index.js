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
  id: {type: Number, required: true },
  title: { type: String, required: false },
  rating: { type: String, required: false },
  img: { type: String, required: false },
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
