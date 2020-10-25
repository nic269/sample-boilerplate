import produce from 'immer'

import {
  LOAD_TOP_POPULAR,
  LOAD_TOP_RATED,
  LOAD_UPCOMMING,
  LOAD_MOVIE_GENRES,
  LOAD_NOW_PLAYING,
  LOAD_MORE_MOVIES,
  REDUX_KEY,
  MORE_MOVIE_POPULAR_KEY,
  MORE_MOVIE_RATED_KEY,
  MORE_MOVIE_UPCOMMING_KEY
} from './constants'

export const initialState = {
  popularMovies: {
    loading: false,
    error: undefined,
    data: {}
  },
  ratedMovies: {
    loading: false,
    error: undefined,
    data: {}
  },
  upCommingMovies: {
    loading: false,
    error: undefined,
    data: {}
  },
  nowPlayingMovies: {
    loading: false,
    error: undefined,
    data: {}
  },
  movieGenres: {
    loading: false,
    error: undefined,
    data: [],
  },
  loadMoreData: {
    [MORE_MOVIE_POPULAR_KEY]: {
      loading: false,
      error: undefined,
    },
    [MORE_MOVIE_RATED_KEY]: {
      loading: false,
      error: undefined,
    },
    [MORE_MOVIE_UPCOMMING_KEY]: {
      loading: false,
      error: undefined,
    },
  }
}
const moreMovieKeyMapping = {
  [MORE_MOVIE_POPULAR_KEY]: 'popularMovies',
  [MORE_MOVIE_RATED_KEY]: 'ratedMovies',
  [MORE_MOVIE_UPCOMMING_KEY]: 'upCommingMovies',
}

/* eslint-disable no-param-reassign */
const reducer = produce((draft, action) => {
  switch (action.type) {
    case LOAD_TOP_POPULAR.REQUEST:
      draft.popularMovies.loading = true
      draft.popularMovies.data = initialState.popularMovies.data
      draft.popularMovies.error = initialState.popularMovies.error
      break
    case LOAD_TOP_POPULAR.SUCCESS:
      draft.popularMovies.loading = false
      draft.popularMovies.data = action.payload
      break
    case LOAD_TOP_POPULAR.ERROR:
      draft.popularMovies.loading = false
      draft.popularMovies.error = action.error
      break

    case LOAD_TOP_RATED.REQUEST:
      draft.ratedMovies.loading = true
      draft.ratedMovies.data = initialState.ratedMovies.data
      draft.ratedMovies.error = initialState.ratedMovies.error
      break
    case LOAD_TOP_RATED.SUCCESS:
      draft.ratedMovies.loading = false
      draft.ratedMovies.data = action.payload
      break
    case LOAD_TOP_RATED.ERROR:
      draft.ratedMovies.loading = false
      draft.ratedMovies.error = action.error
      break

    case LOAD_UPCOMMING.REQUEST:
      draft.upCommingMovies.loading = true
      draft.upCommingMovies.data = initialState.upCommingMovies.data
      draft.upCommingMovies.error = initialState.upCommingMovies.error
      break
    case LOAD_UPCOMMING.SUCCESS:
      draft.upCommingMovies.loading = false
      draft.upCommingMovies.data = action.payload
      break
    case LOAD_UPCOMMING.ERROR:
      draft.upCommingMovies.loading = false
      draft.upCommingMovies.error = action.error
      break

    case LOAD_MOVIE_GENRES.REQUEST:
      draft.movieGenres.loading = true
      draft.movieGenres.data = initialState.movieGenres.data
      draft.movieGenres.error = initialState.movieGenres.error
      break
    case LOAD_MOVIE_GENRES.SUCCESS:
      draft.movieGenres.loading = false
      draft.movieGenres.data = action.payload
      break
    case LOAD_MOVIE_GENRES.ERROR:
      draft.movieGenres.loading = false
      draft.movieGenres.error = action.error
      break

    case LOAD_NOW_PLAYING.REQUEST:
      draft.nowPlayingMovies.loading = true
      draft.nowPlayingMovies.data = initialState.nowPlayingMovies.data
      draft.nowPlayingMovies.error = initialState.nowPlayingMovies.error
      break
    case LOAD_NOW_PLAYING.SUCCESS:
      draft.nowPlayingMovies.loading = false
      draft.nowPlayingMovies.data = action.payload
      break
    case LOAD_NOW_PLAYING.ERROR:
      draft.nowPlayingMovies.loading = false
      draft.nowPlayingMovies.error = action.error
      break

    case LOAD_MORE_MOVIES.REQUEST: {
      const movieKey = action.movieType

      draft.loadMoreData[movieKey].loading = true
      draft.loadMoreData[movieKey].data = initialState.loadMoreData[movieKey].data
      draft.loadMoreData[movieKey].error = initialState.loadMoreData[movieKey].error
      break
    }
    case LOAD_MORE_MOVIES.SUCCESS: {
      const movieKey = action.movieType

      draft.loadMoreData[movieKey].loading = false
      Object.entries(action.payload).forEach(([key, value]) => {
        if (Array.isArray(draft[moreMovieKeyMapping[movieKey]].data[key])) {
          const newOne = [...draft[moreMovieKeyMapping[movieKey]].data[key], ...value]
          draft[moreMovieKeyMapping[movieKey]].data[key] = newOne
        } else {
          draft[moreMovieKeyMapping[movieKey]].data[key] = value
        }
      })
      break
    }
    case LOAD_MORE_MOVIES.ERROR: {
      const movieKey = action.movieType

      draft.loadMoreData[movieKey].loading = false
      draft.loadMoreData[movieKey].error = action.error
      break
    }

    default:
      break
  }
}, initialState)

export default {
  [REDUX_KEY]: reducer,
}
