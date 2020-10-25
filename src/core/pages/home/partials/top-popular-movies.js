import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// UI Components, Business Components, HOCs
import MovieList from './movie-list'

// Actions
import { loadTopPopular } from '../actions'

// Selectors
import { makeSelectTopPopularMovies } from '../selectors'

// Hooks
import useMount from '../../../hooks/useMount'

// Constants
import { MORE_MOVIE_POPULAR_KEY } from '../constants'

const TopPopularMovies = () => {
  const dispatch = useDispatch()
  useMount(() => {
    dispatch(loadTopPopular())
  })
  const topPopularMovies = useSelector(makeSelectTopPopularMovies())

  return <MovieList movieData={topPopularMovies} movieType={MORE_MOVIE_POPULAR_KEY} />
}

export default TopPopularMovies
