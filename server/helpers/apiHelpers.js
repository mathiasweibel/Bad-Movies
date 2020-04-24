const request = require('request')
const axios = require('axios')
const { API_KEY } = require('../../config.js')

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file
// HTTP REQUEST URL:
// https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}

// TODO: write out logic/functions required to query TheMovieDB.org
// Don't forget to export your functions and require them within your server file

module.exports = {

  // Get search data
  // Add after API_KEY: 
  getApiGenres = (next) => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(apiData => {
        let genreList = []
        apiData.genres.map((genre) => {
          genreList.push(genre.name)
        })
        return genreList
      })
      .catch(err => {
        console.log(err)
      })
  }

  // TODO: Get data by genre
  getApiDataByGenre = (genreId) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
      .then(apiData => {
        console.log(`*** apiData.results[0]:`, apiData.results[0])

      })
      .catch(err => {
        console.log(err)
      })
  }

}

// DATA / SCHEMA

/* 
https://developers.themoviedb.org/3/discover/movie-discover?api_key=api_key=6d32bc58e27646a3ce237a154e8891da

apiData
  .results: [ {}s ]


result data:
  .id
  .title
  .tagline
  .poster_path
  .genres
    .name
  .vote_average
  .popularity

  {
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}

*/
