import axios from 'axios';

const API_KEY = "210d6a5dd3f16419ce349c9f1b200d6d";
const BASE_URL = 'https://api.themoviedb.org/3';

const getRandomMovie = async (filmID) => {
    try {
        return await axios.get(`${BASE_URL}/movie/${filmID}s?api_key=${API_KEY}&language=en-US&page=1`);
    } catch (error) {
        console.error('Error fetching random movie', error);
    }
};

const searchMovies = async (query) => {
    try {
        return await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    } catch (error) {
        console.error('Error searching movies:', error);
    }
};

export { searchMovies, getRandomMovie };

