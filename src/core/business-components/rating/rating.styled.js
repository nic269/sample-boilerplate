import styled from 'styled-components'

import theme from '../../styles/theme/theme'
import proximity from '../../styles/mixins/proximity'

export const RatingWrapper = styled.div`
  color: white;
  background: #0f0f14;
  border: 1px solid #444;
  padding: ${proximity(4)} ${proximity(7)};
  border-radius: ${theme["border-radius-base"]};

  .ant-rate {
    color: ${theme["primary-color"]};
  }
`

export const RatingDesc = styled.p`
  margin-bottom: 0;
  color: #868686;
  font-size: ${theme["font-size-xs"]};
`

export const RatingHighlight = styled.span`
  font-size: ${theme["font-size-base"]};
  color: white;
  display: inline-block;
  margin-right: ${proximity(2)};
`

export const RatingValue = styled.span`
  display: inline-block;
  margin-left: ${proximity(7)};
  border: 1px solid #444;
  background-color: #000;
  padding: 0 ${proximity(2)};
  font-size: ${theme["font-size-xs"]};
`
