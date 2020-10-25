import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

// Styled components
import {
  MovieCardWrapper,
  MovieCardRating,
  MovieCardMeta,
  MovieCardCover,
  MovieCardCoverReleaseDate,
} from './movie-card.styled'

const MovieCard = (props) => {
  const {
    coverImgSrc,
    releaseDate,
    title,
    description,
    voteAverage,
  } = props

  return (
    <MovieCardWrapper
      hoverable
      cover={(
        <MovieCardCover>
          <img alt={title} src={coverImgSrc} />
          {releaseDate && <MovieCardCoverReleaseDate>{releaseDate}</MovieCardCoverReleaseDate>}
        </MovieCardCover>
      )}
    >
      <Row align="middle" justify="space-between">
        <Col span={voteAverage ? 20 : 24}>
          <MovieCardMeta
            title={title}
            description={description}
          />
        </Col>
        {!!voteAverage &&
          <Col span={4}>
            <MovieCardRating>{voteAverage}</MovieCardRating>
          </Col>
        }
      </Row>
    </MovieCardWrapper>
  )
}

MovieCard.propTypes = {
  coverImgSrc: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  voteAverage: PropTypes.number,
}

MovieCard.defaultProps = {
  coverImgSrc: '',
  releaseDate: '',
  title: '',
  description: '',
  voteAverage: 0,
}

export default MovieCard
