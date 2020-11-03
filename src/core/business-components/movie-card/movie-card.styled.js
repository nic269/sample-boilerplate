import styled from 'styled-components'
import { Card } from 'antd'

import proximity from '../../styles/mixins/proximity'

const { Meta } = Card

export const MovieCardWrapper = styled(Card)`
  width: 100%;
  height: 100%;

  .ant-card-body {
    padding: ${proximity(7)};
  }
`

export const MovieCardCover = styled.div`
  position: relative;

  img {
    width: 100%;
  }
`

export const MovieCardCoverReleaseDate = styled.span`
  position: absolute;
  bottom: ${proximity(7)};
  left: ${proximity(7)};
  color: #cecece;
`

export const MovieCardMeta = styled(Meta)`
  .ant-card-meta-detail .ant-card-meta-title {
    margin-bottom: 0;
  }

  .ant-card-meta-description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const MovieCardRating = styled.span`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.primaryColor};
  padding: ${proximity(3)} ${proximity(4)};
  border-radius: ${(props) => props.theme.borderRadiusBase};
  color: ${(props) => props.theme.primaryColor};
  line-height: 1;
`
