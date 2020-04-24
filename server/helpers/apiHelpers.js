const request = require('request')
const axios = require('axios')
const { API_KEY } = require('../../config.js')

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// TODO: write out logic/functions required to query TheMovieDB.org
// Don't forget to export your functions and require them within your server file

module.exports = {
  // https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}

}

// DATA / SCHEMA
/* 
apiData
  .id
  .title
  .tagline
  .genres
    .id
    .name
  .vote_average
  .cote_count
  .popularity
  .post_path
*/