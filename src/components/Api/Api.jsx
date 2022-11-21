import axios from 'axios';

const API_KEY = '4e9d706edd348065750333debda117b1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrending() {
  const { data } = await axios('trending/movie/day', {
    params: { api_key: API_KEY },
  });

  return data.results;
}

export async function searchMovies(query) {
  const { data } = await axios('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return data.results;
}

export async function getMovieDetails(id) {
  const { data } = await axios(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios(`/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
}

export async function getMovieReviews(id) {
  const { data } = await axios(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data.results;
}
