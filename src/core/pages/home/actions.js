import {
  LOAD_TOP_POPULAR,
  LOAD_TOP_RATED,
  LOAD_UPCOMMING,
  LOAD_MOVIE_GENRES,
  LOAD_NOW_PLAYING,
  LOAD_MORE_MOVIES,
} from './constants'

// LOAD_TOP_POPULAR
export const loadTopPopular = (page = 1) => ({
  type: LOAD_TOP_POPULAR.REQUEST,
  page,
})
export const topPopularLoaded = (payload) => ({
  type: LOAD_TOP_POPULAR.SUCCESS,
  payload,
})
export const topPopularLoadingError = (error) => ({
  type: LOAD_TOP_POPULAR.ERROR,
  error,
})

// LOAD_TOP_RATED
export const loadTopRated = () => ({
  type: LOAD_TOP_RATED.REQUEST,
})
export const topRatedLoaded = (payload) => ({
  type: LOAD_TOP_RATED.SUCCESS,
  payload,
})
export const topRatedLoadingError = (error) => ({
  type: LOAD_TOP_RATED.ERROR,
  error,
})

// LOAD_UPCOMMING
export const loadUpComming = () => ({
  type: LOAD_UPCOMMING.REQUEST,
})
export const upCommingLoaded = (payload) => ({
  type: LOAD_UPCOMMING.SUCCESS,
  payload,
})
export const upCommingLoadingError = (error) => ({
  type: LOAD_UPCOMMING.ERROR,
  error,
})

// LOAD_MOVIE_GENRES
export const loadMovieGenres = () => ({
  type: LOAD_MOVIE_GENRES.REQUEST,
})
export const movieGenresLoaded = (payload) => ({
  type: LOAD_MOVIE_GENRES.SUCCESS,
  payload,
})
export const movieGenresLoadingError = (error) => ({
  type: LOAD_MOVIE_GENRES.ERROR,
  error,
})

// LOAD_NOW_PLAYING
export const loadNowPlaying = () => ({
  type: LOAD_NOW_PLAYING.REQUEST,
})
export const nowPlayingLoaded = (payload) => ({
  type: LOAD_NOW_PLAYING.SUCCESS,
  payload,
})
export const nowPlayingLoadingError = (error) => ({
  type: LOAD_NOW_PLAYING.ERROR,
  error,
})

// LOAD_MORE_MOVIES
export const loadMoreMovies = (page, movieType) => ({
  type: LOAD_MORE_MOVIES.REQUEST,
  page,
  movieType,
})
export const moreMoviesLoaded = (payload, movieType) => ({
  type: LOAD_MORE_MOVIES.SUCCESS,
  payload,
  movieType,
})
export const moreMoviesLoadingError = (error, movieType) => ({
  type: LOAD_MORE_MOVIES.ERROR,
  error,
  movieType,
})
