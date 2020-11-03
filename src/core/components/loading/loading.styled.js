import styled from 'styled-components'

import proximity from '../../styles/mixins/proximity'

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${proximity(5)};

  .ant-spin-dot {
    width: 50px;
    height: auto;
    margin-bottom: ${proximity(5)};
  }

  .ant-spin-text {
    color: #d8d8d8;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSizeSm};
  }
`
