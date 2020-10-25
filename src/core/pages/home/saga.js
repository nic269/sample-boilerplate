import { call, put, takeLatest } from 'redux-saga/effects'

import * as apis from './apis'
import {
  topPopularLoaded,
  topPopularLoadingError,
  topRatedLoaded,
  topRatedLoadingError,
  upCommingLoaded,
  upCommingLoadingError,
  movieGenresLoaded,
  movieGenresLoadingError,
  nowPlayingLoaded,
  nowPlayingLoadingError,
  moreMoviesLoaded,
  moreMoviesLoadingError,
} from './actions'
import {
  LOAD_TOP_POPULAR,
  LOAD_TOP_RATED,
  LOAD_UPCOMMING,
  LOAD_NOW_PLAYING,
  LOAD_MOVIE_GENRES,
  LOAD_MORE_MOVIES,
  MORE_MOVIE_UPCOMMING_KEY,
  MORE_MOVIE_RATED_KEY,
  MORE_MOVIE_POPULAR_KEY,
} from './constants'

export function* getTopPopular(params = {}) {
  try {
    const { page } = params
    const res = yield call(apis.getPopularMovies, page)
    yield put(topPopularLoaded(res))
  } catch (error) {
    yield put(topPopularLoadingError(error))
  }
}

export function* getTopRated(params = {}) {
  try {
    const { page } = params
    const res = yield call(apis.getRatedMovies, page)
    yield put(topRatedLoaded(res))
  } catch (error) {
    yield put(topRatedLoadingError(error))
  }
}

export function* getUpComming(params = {}) {
  try {
    const { page } = params
    const res = yield call(apis.getUpCommingMovies, page)
    yield put(upCommingLoaded(res))
  } catch (error) {
    yield put(upCommingLoadingError(error))
  }
}

export function* getNowPlaying(params = {}) {
  try {
    const { page } = params
    const res = yield call(apis.getNowPlayingMovies, page)
    yield put(nowPlayingLoaded(res))
  } catch (error) {
    yield put(nowPlayingLoadingError(error))
  }
}

export function* getMovieGenres() {
  try {
    const res = yield call(apis.getMovieGenres)
    yield put(movieGenresLoaded(res.genres))
  } catch (error) {
    yield put(movieGenresLoadingError(error))
  }
}

const loadMoreMovieApi = {
  [MORE_MOVIE_POPULAR_KEY]: apis.getPopularMovies,
  [MORE_MOVIE_RATED_KEY]: apis.getRatedMovies,
  [MORE_MOVIE_UPCOMMING_KEY]: apis.getUpCommingMovies,
}

export function* getMoreMovies(params = {}) {
  const { movieType, page } = params
  try {
    const res = yield call(loadMoreMovieApi[movieType], page)
    yield put(moreMoviesLoaded(res, movieType))
  } catch (error) {
    yield put(moreMoviesLoadingError(error, movieType))
  }
}

export default function* homeSaga() {
  yield takeLatest(LOAD_TOP_POPULAR.REQUEST, getTopPopular)
  yield takeLatest(LOAD_TOP_RATED.REQUEST, getTopRated)
  yield takeLatest(LOAD_UPCOMMING.REQUEST, getUpComming)
  yield takeLatest(LOAD_NOW_PLAYING.REQUEST, getNowPlaying)
  yield takeLatest(LOAD_MOVIE_GENRES.REQUEST, getMovieGenres)
  yield takeLatest(LOAD_MORE_MOVIES.REQUEST, getMoreMovies)
}
