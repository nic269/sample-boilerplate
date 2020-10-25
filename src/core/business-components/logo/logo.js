import React from 'react'
import PropTypes from 'prop-types'

// Styled components
import { LogoWrapper } from './logo.styled'

const Logo = ({ inverse }) => (<LogoWrapper inverse={inverse}><span>THEMOVIEBOX</span></LogoWrapper>)

Logo.propTypes = {
  inverse: PropTypes.bool,
}

Logo.defaultProps = {
  inverse: false,
}

export default Logo
