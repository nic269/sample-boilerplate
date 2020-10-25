import styled from 'styled-components'

import device from '../../styles/device/device'

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${(props) => (props.inverse ? '#000' : '#fff') };
    font-size: 24px;

    @media ${device.mobile} {
      font-size: 12px;
    }
  }
`
