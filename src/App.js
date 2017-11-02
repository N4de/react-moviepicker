import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';

const API_KEY = '7d4a9a79104d85fe4518aee4ee95fd56';
const ROOT_URL ='https://api.themoviedb.org/';

class App extends Component {
  this.state = {
			movies: []
		};

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
