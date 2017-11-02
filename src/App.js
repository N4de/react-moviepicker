import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search_bar';
import axios from 'axios';

const API_KEY = '7d4a9a79104d85fe4518aee4ee95fd56';
const ROOT_URL ='https://api.themoviedb.org/';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    };

    this.discoverMovies();
  }


  discoverMovies() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.props.discoverMovies} />
      </div>
    );
  }
}

export default App;
