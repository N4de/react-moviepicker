import React from 'react';
import MovieListItem from './movie_list_item';

const MovieList = (props) => {
	console.log(props.movies);
  const movieItems = props.movies.map((movie) => {
		return <MovieListItem
     		key={movie.id}
			movie={movie} />;
	});

  return(
		<ul className= "col-md-4 list-group">
			{movieItems}
		</ul>
	);
}

export default MovieList;
