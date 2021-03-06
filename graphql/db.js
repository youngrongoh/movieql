import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES_URL = `${API_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${API_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${API_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: limit,
    minimum_rating: rating,
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAIL_URL, {
    params: {
      movie_id: id,
    },
  });

  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
