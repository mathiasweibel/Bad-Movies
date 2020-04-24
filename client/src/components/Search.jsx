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
    this.mapGenres = this.mapGenres.bind(this)
    this.selectGenre = this.selectGenre.bind(this)
  }

  componentDidMount () {
    this.getGenres()
    setTimeout(this.mapGenres(), 1000)
    setTimeout(console.log(`this.state:`, this.state), 2000)
  }

  getGenres () {
    axios.get('/genres')
      .then((res) => {
        // res = array of objs w/ id and name props
        let apiGenres = []
        res.data.map(object => {
          apiGenres.push(object.name)
        })
        this.setState({
          genres: apiGenres
        })
        console.log(`apiGenres`, apiGenres)
      })
      .catch(err => {
        console.log(`!!! GET /genres err:`, err)
      })
  }

  mapGenres () {
    const genreOptions = []
    this.state.genres.map((genreName) => {
      genreOptions.push(genreName)
    })
  }

  selectGenre (input) {
    this.setState({
      selected: input
    })
  }

  render () {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select options={this.state.genreOptions} onChange={this.selectGenre} id="dropdown" />
        <br /><br />

        <button>Search</button>

      </div>
    )
  }
}

export default Search
