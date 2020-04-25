import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      favorites: [{deway: "favorites"}],
      showFaves: false
    }
    // Bind
    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this)
  }

  getMovies (genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios.get('/search', { params: { genreId: genreId } })
      .then((apiData) => {
        // console.log(`$$ getMovies GET sent w/ genreId:`, genreId)
        // console.log(`$$ getMovies apiData.data:`, apiData.data)
        this.setState({
          movies: apiData.data
        })
      })
      .catch(err => console.log(`getMovies ERR:`, err))
  }

  saveMovie (movieObj) {
    // same as above but do something diff
    console.log(`... saveMovie | movieObj.title:`, movieObj.title)
    axios.post('/save', { params: { movie: movieObj } })
      .then((output) => {
        console.log(`... saveMovie | output:`, output)
        // do something w/ output
      })
      .catch(err => console.log(`! ERR | saveMovie:`, err))
  }

  deleteMovie () {
    // same as above but do something diff
  }

  swapFavorites () {
  // dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header>
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
