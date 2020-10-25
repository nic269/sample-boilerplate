import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// UI Components, Business Components, HOCs
import MovieList from './movie-list'

// Actions
import { loadTopRated } from '../actions'

// Selectors
import { makeSelectTopRatedMovies } from '../selectors'

// Hooks
import useMount from '../../../hooks/useMount'

// Constants
import { MORE_MOVIE_RATED_KEY } from '../constants'

const TopRatedMovies = () => {
  const dispatch = useDispatch()
  useMount(() => {
    dispatch(loadTopRated())
  })
  const topRatedMovies = useSelector(makeSelectTopRatedMovies())

  return <MovieList movieData={topRatedMovies} movieType={MORE_MOVIE_RATED_KEY} />
}

export default TopRatedMovies
