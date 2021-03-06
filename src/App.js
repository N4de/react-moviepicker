import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import axios from 'axios';
import MovieList from './components/movie_list';

const API_KEY = '7d4a9a79104d85fe4518aee4ee95fd56';
const ROOT_URL ='https://api.themoviedb.org';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: []
    };

  }

  componentDidMount() {
    this.discoverMovies();
  }


  discoverMovies() {

    axios.get(`${ROOT_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => {
        this.setState ({
          movies: response.data.results
        });
        console.log(response.data.results);
        console.log(this.state.movies);
      })
      .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onInputChange={this.discoverMovies} />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
