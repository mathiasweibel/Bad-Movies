import React from 'react'
import urljoin from 'url-join'

class Movies extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  // componentDidMount () {
  // }

  handleClick (movieObj) {
    console.log(`::: handleClick() | movieObj:`, movieObj)
    this.props.saveMovie(movieObj)
  }

  render() {
    return (
      <ul className="movies">
        {this.props.movies.map(movie => {
          return (
            <li className="movie_item" key={movie.id}>
              <a href="#" onClick={() => this.handleClick(movie)}>
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
                <div className="movie_description">
                  <h2>{movie.title}</h2>
                  <span>{movie.img}</span>
                  <section className="movie_details">
                    <div className="movie_year">
                      <span className="title">Year</span>
                      <span>{movie.year}</span>
                    </div>
                    <div className="movie_rating">
                      <span className="title">Rating</span>
                      <span>{movie.rating}</span>
                    </div>
                  </section>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Movies;

// NOTES
// You need a return inside the .map function IF you are returning something other than
// a component.