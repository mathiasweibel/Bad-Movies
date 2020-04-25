const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const request = require('request')
const controllers = require('./controllers/movieController')
const api = require('./helpers/apiHelpers.js')

const app = express()
const port = 3000

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// Serve static files
app.use(express.static(__dirname + '/../client/dist'))

// Routing
app.get('/genres', function(req, res, genreId) {
  controllers.getGenres(req, res)
});

app.get('/search', (req, res) => {
  console.log(`$$ server GET/search | req.query:`, req.query)
  // req.query = params obj
  controllers.getSearch(req, res, req.query.genreId)
});

app.post('/save', (req, res, movieObj) => {
  //save movie as favorite into the database
  console.log(`$ server POST/save | req.body, movieObj.title:`, req.body, movieObj.title)
  controllers.saveMovie(req, res, movieObj)
});

app.post('/delete', (req, res) => {
  //remove movie from favorites into the database
  console.log(`$ server POST/delete | req.body:`, req.body)
  controllers.deleteMovie(req, res)
});

// Activate server
app.listen(3000, function() {
  console.log(`Listening on ${port}`);
});




/*
router.get('/search', movieController.getSearch)
router.get('/genres', movieController.getGenres)
router.post('/save', movieController.saveMovie)
router.delete('/delete', movieController.deleteMovie)

*/