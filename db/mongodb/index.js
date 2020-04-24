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
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: String, required: true },
  image: { type: Buffer, required: false },
  description: { type: String, required: false }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = {
  db,
  Movie
}