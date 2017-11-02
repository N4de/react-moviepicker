import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
		super(props);

		this.state = { term: '' };
	}

  render() {
    return(
      <div>
        <div className="search-bar" label="Search for Movies">
          <input />
        </div>
        <button className="btn btn-primary">Search</button>
        movies and things
      </div>
    );
  }
}

export default SearchBar;
