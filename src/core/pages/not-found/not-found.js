import React from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { Result, Button } from 'antd'

// Styled
import { NotFoundPageWrapper } from './not-found.styled'

const NotFound = () => {
  const dispatch = useDispatch()
  const goBackHome = () => dispatch(push('/'))

  return (
    <NotFoundPageWrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={goBackHome}>Back Home</Button>}
      />
    </NotFoundPageWrapper>
  )
}

export default NotFound
