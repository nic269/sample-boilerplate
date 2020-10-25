import React from 'react'
import PropTypes from 'prop-types'
import { Rate } from 'antd'

// Styled components
import {
  RatingWrapper,
  RatingDesc,
  RatingHighlight,
  RatingValue,
} from './rating.styled'

const Rating = (props) => (
  <RatingWrapper>
    <RatingDesc>
      <RatingHighlight>Rating</RatingHighlight> based on {props.basedOn} reviews
    </RatingDesc>
    <Rate disabled allowHalf value={+props.value} />
    <RatingValue>{props.originalValue}</RatingValue>
  </RatingWrapper>
)

Rating.propTypes = {
  value: PropTypes.string,
  originalValue: PropTypes.number,
  basedOn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default Rating
