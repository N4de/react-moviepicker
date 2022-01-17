import axios from 'axios';


const ROOT_URL ='https://api.themoviedb.org';
const API_KEY = '7d4a9a79104d85fe4518aee4ee95fd56'

export const searchMovies = (searchTerm) => {
    console.log(searchTerm);
    return axios.get(
        `${ROOT_URL}/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&include_adult=false&page=1`
    );
}