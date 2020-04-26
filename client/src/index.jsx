import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      favorites: [],
      showFaves: false
    }
    // Bind
    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.swapFavorites = this.swapFavorites.bind(this)
  }

  getMovies (genreId) {
    // make an axios request to your server on the GET SEARCH endpoint
    axios.get('/search', { params: { genreId: genreId } })
      .then((apiData) => {
        console.log(`apiData.data:`, apiData.data)
        this.setState({
          movies: apiData.data
        })
      })
      .catch(err => console.log(`getMovies ERR:`, err))
  }

  saveMovie (movieObj) {
    // same as above but do something diff
    console.log(`::: App.saveMovie | movieObj.title:`, movieObj.title)
    let newFaves = this.state.favorites.slice()
    newFaves.push({ [movieObj.title]: 'favorites' })
    this.setState({
      favorites: newFaves
    }, console.log(`* this.state:`, this.state))
    axios.post('/save', { params: { movie: movieObj } })
      .then((output) => {
        console.log(`::: App.saveMovie | output:`, output)
        //
      })
      .catch(err => console.log(`! ERR | saveMovie:`, err))
  }

  deleteMovie (movieObj) {
    // same as above but do something diff
    axios.delete('/delete', { params: { movie: movieObj } })
      .then((output) => {
        console.log(`::: App.deleteMovie | output`, output)

      })
      .catch(err => console.log(`! ERR | App.deleteMovie:`, err))
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
