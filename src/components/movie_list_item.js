import React from 'react';

const MovieListItem = ({movie}) => {

	return(
		<li >
			{movie.name}
		</li>
	);
};

export default MovieListItem;
