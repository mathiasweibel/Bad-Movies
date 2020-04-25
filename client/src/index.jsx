import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false
    }
    // Bind
    this.getMovies = this.getMovies.bind(this)
  }

  getMovies (genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    console.log(`getMovies fired`)
    axios
      .get('/search', {genreId: genreId})
      .then(console.log(`getMovies search sent w/ genreId:`, genreId))
      .catch(err => console.log(`getMovies ERR:`, err))
  }

  saveMovie () {
    // same as above but do something diff
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
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
