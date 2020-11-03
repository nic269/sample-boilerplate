import React from 'react'
import { Space, Divider } from 'antd'

// UI Components, Business Components, HOCs
import Logo from '../logo/logo'

// Styled components
import {
  FooterWrapper,
  FooterCopyRight,
  FooterNav,
  SpaceBetweenWrapper,
  IconWrapper,
} from './footer.styled'
import { GContainer } from '../../styles/global'

// Assets
import faIcon from '../../../assets/images/fa-icon.png'
import inIcon from '../../../assets/images/in-icon.png'
import pinIcon from '../../../assets/images/pin-icon.png'
import twIcon from '../../../assets/images/tw-icon.png'

const Footer = () => (
  <FooterWrapper>
    <GContainer>
      <SpaceBetweenWrapper>
        <Logo inverse />
        <FooterNav>
          <Space size="large">
            <span>About</span>
            <span>Movies</span>
            <span>Ratings</span>
            <span>Contact</span>
          </Space>
        </FooterNav>
      </SpaceBetweenWrapper>
      <Divider />
      <SpaceBetweenWrapper>
        <FooterCopyRight>Designed by AnhN. All rights reserved.</FooterCopyRight>
        <Space>
          <IconWrapper><img src={faIcon} alt="Facebook" /></IconWrapper>
          <IconWrapper><img src={inIcon} alt="LinkedIn" /></IconWrapper>
          <IconWrapper><img src={pinIcon} alt="Pinteres" /></IconWrapper>
          <IconWrapper><img src={twIcon} alt="Twitter" /></IconWrapper>
        </Space>
      </SpaceBetweenWrapper>
    </GContainer>
  </FooterWrapper>
)

export default Footer
