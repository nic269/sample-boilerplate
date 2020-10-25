import React from 'react'
import { Spin } from 'antd'

// Styled
import { LoadingWrapper } from './loading.styled'

// Assets
import loadingIcon from '../../../assets/images/loading-icon.png'

const Loading = () => (
  <LoadingWrapper>
    <Spin indicator={<img src={loadingIcon} alt="Loading..." />} tip="Loading" spinning/>
  </LoadingWrapper>
)

export default Loading
