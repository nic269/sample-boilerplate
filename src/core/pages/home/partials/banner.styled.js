import styled from 'styled-components'
import { Button as AntdButton } from 'antd'

// Styled
import { GContainer } from '../../../styles/global'
import device from '../../../styles/device/device'
import proximity from '../../../styles/mixins/proximity'

export const BannerWrapper = styled.div`
  position: relative;
`

export const TopNav = styled(GContainer)`
  position: absolute;
  top: ${proximity(9)};
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 9;

  @media ${device.mobile} {
    .ant-space-item {
      margin-right: ${proximity(3)}!important;
    }
  }
`

export const CarouselWrapper = styled.div`
  .ant-carousel .slick-dots {
    margin-bottom: 0;
  }

  .ant-carousel .slick-dots li {
    height: auto;
    width: 30px;
    margin-right: ${proximity(7)};

    &.slick-active {
      width: 38px;

      button {
        background: ${(props) => props.theme.primaryColor};
      }
    }

    button {
      height: 10px;
      border-radius: ${(props) => props.theme.borderRadiusBase};
      background: #d8d8d8;
      opacity: 1;
    }
  }
`

export const CarouselItem = styled.div`
  display: block;
  position: relative;
`

export const CarouselImg = styled.img`
  width: 100%;
  max-height: 700px;
  object-fit: cover;
  min-height: 350px;
`

export const CarouselInfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: ${proximity(18)};
  padding-top: ${proximity(15)};
  background-color: rgb(0, 0, 0, 0.3);

  @media ${device.mobile} {
    padding-top: ${proximity(5)};
  }
`

export const CarouselInfo = styled(GContainer)`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    display: block;
  }
`

export const CarouselTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 2em;

  @media ${device.mobile} {
    font-size: 1.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const CarouselDescription = styled.div`
  color: #d8d8d8;
  margin-bottom: ${proximity(7)};

  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizeSm};

    .ant-space {
      display: block;
    }

    .ant-space-item {
      margin-right: ${proximity(5)}!important;
      display: inline-block;
    }
  }
`

export const ActionWrapper = styled.div`
  @media ${device.mobile} {
    .ant-space-item {
      margin-right: ${proximity(4)}!important;
    }
  }
`

export const  ButtonText = styled(AntdButton)`
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  padding-left: 0;
  padding-right: 0;

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => props.theme.primaryColor};
  }

  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizeXs};
    padding: ${proximity(1)} ${proximity(4)};
    height: 26px;
  }
`

export const Button = styled(AntdButton)`
  text-transform: uppercase;
  font-weight: 300;

  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSizeXs};
    padding: ${proximity(1)} ${proximity(4)};
    height: 26px;
  }
`

export const VerticalMiddle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const JustDesktop = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`
