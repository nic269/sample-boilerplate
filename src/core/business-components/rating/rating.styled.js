import styled from 'styled-components'

import proximity from '../../styles/mixins/proximity'

export const RatingWrapper = styled.div`
  color: white;
  background: #0f0f14;
  border: 1px solid #444;
  padding: ${proximity(4)} ${proximity(7)};
  border-radius: ${(props) => props.theme.borderRadiusBase};

  .ant-rate {
    color: ${(props) => props.theme.primaryColor};
  }
`

export const RatingDesc = styled.p`
  margin-bottom: 0;
  color: #868686;
  font-size: ${(props) => props.theme.fontSizeXs};
`

export const RatingHighlight = styled.span`
  font-size: ${(props) => props.theme.fontSizeBase};
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
  font-size: ${(props) => props.theme.fontSizeXs};
`
