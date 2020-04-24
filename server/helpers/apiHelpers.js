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
  // Add after API_KEY: &language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1
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
  getApiDataByGenre = (genre) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, {
      params: {
        sort_by: vote_average.asc,
        include_adult: false,
        include_video: false,
        page: 1
      }
    })
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
*/
