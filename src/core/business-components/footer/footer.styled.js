import styled from 'styled-components'

import proximity from '../../styles/mixins/proximity'
import device from '../../styles/device/device'

export const FooterWrapper = styled.div`
  background: #fff;
  padding-top: ${proximity(7)};
  height: 297px;
  border-top: 1px solid ${(props) => props.theme.borderColorBase};
  margin-top: ${proximity(7)};

  .ant-divider-horizontal {
    margin: ${proximity(4)} 0;
  }

  @media ${device.mobile} {
    height: 200px;

    .ant-space-item {
      margin-right: ${proximity(5)}!important;
    }
  }
`

export const SpaceBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterNav = styled.div`
  display: flex;

  span {
    font-size: ${(props) => props.theme.fontSizeSm};

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.linkColor};
    }
  }
`

export const FooterCopyRight = styled.p`
  font-size: ${(props) => props.theme.fontSizeSm};
  color: #d8d8d8;

  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizeXs};
  }
`

export const IconWrapper = styled.div`
  width: 20px;

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }

  @media ${device.mobile} {
    width: 15px;
  }
`
