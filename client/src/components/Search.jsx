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
        this.setState({
          genres: apiGenres
        })
      })
      .catch(err => {
        console.log(`!!! GET /genres err:`, err)
      })
  }

  selectGenre (e) {
    console.log(`e.target.value from selectGenre`, e.target.value)
    this.setState({
      selected: e.target.value
    }) // delayed?
  }

  render () {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.selectGenre} id="dropdown">
          {this.state.genres.map(genre => {
            return <option value={genre.id} key={JSON.stringify(genre)}>{genre.name}</option>
          })}
        </select>
        <br /><br />

        <button>Search</button>

      </div>
    )
  }
}

export default Search

// Alternate: try using this attr-style parameter to set up the dropdown
// options={this.state.genreOptions}
