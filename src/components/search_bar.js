import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
		super(props);

		this.state = { term: '' };
	}

  render() {
    return(
      <div>
        <div className="search-bar">
          <input />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }
}

export default SearchBar;
