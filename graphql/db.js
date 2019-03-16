import fetch from 'node-fetch'

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
    let requestUrl = API_URL;
    if (limit > 0) {
        requestUrl = `${API_URL}?limit=${limit}`
    }
    if (rating > 0) {
        requestUrl = `${requestUrl}&minimum_rating=${rating}`;
    }

    return fetch(`${requestUrl}`)
        .then(res => res.json())
        .then(json => json.data.movies)
};