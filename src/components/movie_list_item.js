import React from 'react';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w92/';
const MovieListItem = ({movie}) => {

	return(
		<li className="list-group-item">
			<div className='video-list media'>
				<div className='media-body'>
					<div className='media-heading'>{movie.title}</div>
				</div>
			</div>
		</li>
	);
};

export default MovieListItem;
