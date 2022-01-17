import React, { useState } from 'react';

const MovieListItem = ({movie}) => {

	const [isGood, setIsGood] = useState('');

	const handleClick = () => {
		console.log(movie);
		movie.vote_average >= 7.4 ? setIsGood(true) : setIsGood(false);
	}

	const checkIfMovieGood  = () => {
		if(isGood === '') {
			return
		}

		return {
			'color': isGood ? '#00cd06' : '#eb0e19'
		}
	}

	return(
		<li className="list-group-item" onClick={() => handleClick()}>
			<div className='video-list media'>
				<div className='media-body'>
					<div className='media-heading' style={checkIfMovieGood()}>{movie.title}</div>
				</div>
			</div>
		</li>
	);
};

export default MovieListItem;
