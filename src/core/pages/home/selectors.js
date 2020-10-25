import { createSelector } from 'reselect'
import _get from 'lodash/get'
import _take from 'lodash/take'

import { initialState } from './reducer'
import { REDUX_KEY } from './constants'

export const selectHome = state => state[REDUX_KEY] || initialState

export const makeSelectTopPopularMovies = () =>
  createSelector(
    selectHome,
    (homeState) => homeState.popularMovies,
  )

export const makeSelectTopRatedMovies = () =>
  createSelector(
    selectHome,
    (homeState) => homeState.ratedMovies,
  )

export const makeSelectUpCommingMovies = () =>
  createSelector(
    selectHome,
    (homeState) => homeState.upCommingMovies,
  )

export const makeSelectNowPlayingMovies = () =>
  createSelector(
    selectHome,
    (homeState) => homeState.nowPlayingMovies,
  )

export const makeSelectNumberOfNowPlayingMovies = (number) =>
  createSelector(
    makeSelectNowPlayingMovies(),
    (nowPlayingMovies) => (_take(
      _get(nowPlayingMovies, 'data.results', []),
      number,
    )),
  )

export const makeSelectMovieGenres = () =>
  createSelector(
    selectHome,
    (homeState) => homeState.movieGenres,
  )

export const makeSelectMovieGenreObject = () =>
  createSelector(
    makeSelectMovieGenres(),
    (movieGenres) => _get(movieGenres, 'data', [])
      .reduce((result, genre) => ({
        ...result,
        [genre.id]: genre.name,
      }), {}),
  )

export const makeSelectMovieGenreOptions = () =>
  createSelector(
    makeSelectMovieGenres(),
    (movieGenres) => _get(movieGenres, 'data', [])
      .map((genre) => ({
        label: genre.name,
        value: genre.id,
      })),
  )

export const makeSelectMoreMovies = () =>
  createSelector(
    selectHome,
    (homeState) => homeState.loadMoreData,
  )

export const makeSelectMoreMovie = (movieType) =>
  createSelector(
    makeSelectMoreMovies(),
    (moreMovies) => moreMovies[movieType],
  )
