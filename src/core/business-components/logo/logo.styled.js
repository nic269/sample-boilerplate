import styled from 'styled-components'

import { getMediaDF as doStyleFor } from '../../styles/mixins/getDevice'

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  span {
    color: ${(props) => (props.inverse ? '#000' : '#fff') };
    font-size: 24px;

    ${doStyleFor('mobile')} {
      font-size: 12px;
    }
  }
`
