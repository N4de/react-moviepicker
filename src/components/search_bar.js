import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
		super(props);

		this.state = { term: '' };
	}

  handleBlur() {
    console.log(this.state.term);
  }

  render() {
    return(
      <div>
        <div className="search-bar">
          <input onChange={e => this.onInputChange(e.target.value)} onBlur={() => this.handleBlur()} onKeyUp={() => this.handleKeyPress()} />
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      
    }
  }
}

export default SearchBar;
