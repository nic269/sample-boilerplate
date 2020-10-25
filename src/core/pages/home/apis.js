import request from '../../utils/request/request'
import { END_POINT, API_KEY } from './constants'

export const getPopularMovies = (page = 1) => request(
  `${END_POINT}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  {
    method: 'GET',
  }
)

export const getRatedMovies = (page = 1) => request(
  `${END_POINT}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
  {
    method: 'GET',
  }
)

export const getUpCommingMovies = (page = 1) => request(
  `${END_POINT}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
  {
    method: 'GET',
  }
)

export const getNowPlayingMovies = (page = 1) => request(
  `${END_POINT}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  {
    method: 'GET',
  }
)

export const getMovieGenres = () => request(
  `${END_POINT}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  {
    method: 'GET',
  }
)
