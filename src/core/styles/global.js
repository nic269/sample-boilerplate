import styled, { createGlobalStyle } from 'styled-components'

import proximity from './mixins/proximity'
import device from './device/device'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-weight: 300;
  }

  body {
    font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
  }

  #root {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Helvetica, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5em;
  }
`

export const GContainer = styled.div`
  max-width: 1440px;
  padding-left: ${proximity(15)};
  padding-right: ${proximity(15)};
  margin: 0 auto;
  position: relative;

  @media ${device.mobile} {
    padding-left: ${proximity(7)};
    padding-right: ${proximity(7)};
  }
`

export default GlobalStyle
