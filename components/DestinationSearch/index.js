import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchInputDestinations = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="topContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="searchOne">
          <input
            onChange={this.searchInputDestinations}
            className="searchInput"
            placeholder="search"
            type="search"
            value={searchInput}
          />
          <img
            className="searchIcon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              details={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
