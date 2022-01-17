import React, { Component, useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import axios from 'axios';
import MovieList from './components/movie_list';
import { searchMovies } from './movie_service';

const API_KEY = '7d4a9a79104d85fe4518aee4ee95fd56';
const ROOT_URL ='https://api.themoviedb.org';

function App() {
  
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    discoverMovies();
  }, []) 
   
  const discoverMovies = () => {

    axios.get(`${ROOT_URL}/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
      .then(response => {
       setMovies(response.data.results);
      })
      .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  const fetchMovies = (searchTerm) => {
    searchMovies(searchTerm)
      .then(response => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  return (
    <div>
      <h1>Moviepicker v0.1</h1>
      <SearchBar handleSearch={fetchMovies} />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
