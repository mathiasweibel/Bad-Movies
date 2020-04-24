const mongoose = require('mongoose')
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect('mongodb://localhost:27017/badmovies', { useNewUrlParser: true })
}

const db = mongoose.connection

mongoose.Promise = Promise
db.on('error', console.error.bind(console, '* * * Connection error:'))
db.once('open', () => {
  console.log(`* * * Connected to db`)
})

// Schema
const genreSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true }
})

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: Buffer, required: false },
  description: { type: String, required: false }
})

const Genre = mongoose.model('Genre', genreSchema)
const Movie = mongoose.model('Movie', movieSchema)
// Mongoose compiles a 'Movie' model and looks for the 'movies' collection

module.exports = {
  db,
  Genre,
  Movie
}