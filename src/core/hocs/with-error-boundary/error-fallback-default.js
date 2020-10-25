import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'

import { Container } from './error-fallback-default.styled'

const ErrorFallbackDefault = ({ resetErrorBoundary }) => (
  <Container>
    <Alert
      name="error-boundary"
      type="error"
      message="Something went wrong!"
      description={(
        <>
          <p>
            There is something wrong, please try again later.
          </p>
          <Button onClick={resetErrorBoundary} type="primary">
            Try again
            <ReloadOutlined />
          </Button>
        </>
      )}
    />
  </Container>
)

ErrorFallbackDefault.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  resetErrorBoundary: PropTypes.func,
}

ErrorFallbackDefault.defaultProps = {
  error: {},
  resetErrorBoundary: undefined,
}

export default ErrorFallbackDefault
