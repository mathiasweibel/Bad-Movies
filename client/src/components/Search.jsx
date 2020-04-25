import React from 'react'
import axios from 'axios'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: [],
      genreOptions: [],
      selected: null
    }
    this.getGenres = this.getGenres.bind(this)
    this.selectGenre = this.selectGenre.bind(this)
  }

  componentDidMount () {
    this.getGenres()
  }

  getGenres (next) {
    axios.get('/genres')
      .then((res) => {
        // res = array of objs w/ id and name props
        let apiGenres = []
        res.data.map(object => {
          apiGenres.push(object)
        })
        apiGenres.unshift({ name: "(Genre)", id: null })
        this.setState({
          genres: apiGenres
        })
      })
      .catch(err => {
        console.log(`!!! getGenres err:`, err)
      })
  }

  selectGenre (e) {
    this.setState({
      selected: e.target.value
    })
  }

  render () {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />

        <select onChange={this.selectGenre} id="dropdown">
          {this.state.genres.map(genre => {
            return <option value={genre.id} key={JSON.stringify(genre)}>{genre.name}</option>
          })}
        </select>
        <br /><br />

        <button onClick={() => (this.props.getMovies(this.state.selected))}>Search</button>

      </div>
    )
  }
}

export default Search

// Alternate: try using this attr-style parameter to set up the dropdown
// options={this.state.genreOptions}

// If you call a method on another component from within this component, you have to either
// call a native method that calls the parent's method, or call the parent's method inside
// an arrow function (see Search button above)
