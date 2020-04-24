import React from 'react'
import axios from 'axios'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      genres: []
    }
    this.getGenres = this.getGenres.bind(this)
  }

  componentDidMount () {
    this.getGenres()
  }

  getGenres () {
    axios.get('/genres')
      .then((res) => {
        // array of objs
        console.log(`*** GET /genres res:`, res.data)
        let apiGenres = []
        res.data.map(object => {
          apiGenres.push(object.name)
        })
        this.setState({
          genres: apiGenres
        })
        console.log(`*** this.state.genres:`, this.state.genres)
      })
      .catch(err => {
        console.log(`!!! GET /genres err:`, err)
      })
  }

  render () {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select>
          <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option>
        </select>
        <br /><br />

        <button>Search</button>

      </div>
    )
  }
}

export default Search
