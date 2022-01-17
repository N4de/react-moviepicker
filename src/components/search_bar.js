import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
		super(props);

		this.state = { 
      term: '',
      lastSearchedTerm: '',
    };
    
	}

  handleBlur() {
    const term = this.state.term;
    this.searchMovies(this.state.term);
  }
  
  searchMovies(term) {
    
    if(this.state.lastSearchedTerm === term) {
      console.log('same term, returning');
      return;
    }
    
    this.props.handleSearch(term);
    this.setState({
      lastSearchedTerm: term
    });
  }

  
  onInputChange(term) {
    this.setState({term});
  }
  
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.searchMovies(this.state.term);
    }
  }
  
  render() {
    return(
      <div>
        <div className="search-bar">
          <input onChange={e => this.onInputChange(e.target.value)} onBlur={() => this.handleBlur()} onKeyUp={(e) => this.handleKeyPress(e)} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
