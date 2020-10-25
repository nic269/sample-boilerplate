import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'antd'
import InfiniteScroll from 'react-infinite-scroller'
import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'

// UI Components, Business Components, HOCs
import MovieCard from '../../../business-components/movie-card/movie-card'
import Loading from '../../../components/loading/loading'

// Actions
import { loadMoreMovies } from '../actions'

// Selectors
import { makeSelectMovieGenreObject, makeSelectMoreMovie } from '../selectors'

// Constants
import { IMG_END_POINT } from '../constants'
import noPoster from '../../../../assets/images/no-poster.png'

const getId = (arg1, agr2) => (`${arg1}-${agr2}`)

const MovieList = (props) => {
  const dispatch = useDispatch()
  const { movieData, movieType } = props
  const genreObject = useSelector(makeSelectMovieGenreObject())
  const moreMovieData = useSelector(makeSelectMoreMovie(movieType))
  const getMoreMovies = (page) => dispatch(loadMoreMovies(page, movieType))
  if (_isEmpty(movieData.data) || movieData.loading) return <Loading />

  return (
    <InfiniteScroll
      initialLoad
      pageStart={1}
      loadMore={getMoreMovies}
      hasMore={!moreMovieData.loading && movieData.data.total_pages > movieData.data.page}
      loader={<Loading key="loading" />}
      threshold={0}
    >
      <Row type="flex" gutter={[24, 24]}>
        {_get(movieData, 'data.results', []).map((movie, idx) => (
          <Col span={24} sm={12} md={8} lg={6} key={getId(movie.id, idx)}>
            <MovieCard
              title={movie.title}
              description={_get(movie, 'genre_ids', [])
                .map((genreId) => (genreObject[genreId]))
                .join(', ')
              }
              voteAverage={movie.vote_average}
              coverImgSrc={movie.poster_path ? `${IMG_END_POINT}/w440_and_h660_face${movie.poster_path}` : noPoster}
              releaseDate={movie.release_date}
            />
          </Col>
        ))}
      </Row>
      {moreMovieData.loading && <Loading key="loading" />}
    </InfiniteScroll>
  )
}

MovieList.propTypes = {
  movieData: PropTypes.shape({
    data: PropTypes.shape({
      results: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          genre_ids: PropTypes.arrayOf(PropTypes.number),
          vote_average: PropTypes.number,
          release_date: PropTypes.string,
        }),
      ),
      total_pages: PropTypes.number,
      page: PropTypes.number,
    }),
    loading: PropTypes.bool,
  }),
  movieType: PropTypes.string,
}

MovieList.defaultProps = {
  movieData: {},
  movieType: '',
}

export default MovieList
