import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// UI Components, Business Components, HOCs
import MovieList from './movie-list'

// Actions
import { loadUpComming } from '../actions'

// Selectors
import { makeSelectUpCommingMovies } from '../selectors'

// Hooks
import useMount from '../../../hooks/useMount'

// Constants
import { MORE_MOVIE_UPCOMMING_KEY } from '../constants'

const UpCommingMovies = () => {
  const dispatch = useDispatch()
  useMount(() => {
    dispatch(loadUpComming())
  })
  const upCommingMovies = useSelector(makeSelectUpCommingMovies())

  return <MovieList movieData={upCommingMovies} movieType={MORE_MOVIE_UPCOMMING_KEY} />
}

export default UpCommingMovies
