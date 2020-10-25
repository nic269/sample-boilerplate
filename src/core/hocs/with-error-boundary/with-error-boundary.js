import React from 'react'
import PropTypes from 'prop-types'
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary'
import _get from 'lodash/get'

// Components
import ErrorFallbackDefault from './error-fallback-default'

const errorHandler = ({ componentName }) => (error, infor) => {
  const contextObj = {
    error: {
      kind: 'BoundaryError',
      stack: _get(infor, 'componentStack'),
    },
    componentName,
  }

  // Will be a logger for reporting
  // eslint-disable-next-line no-console
  console.error(error.message, contextObj, 'error')
}

const ErrorBoundary = (props) => {
  const { onReset, resetKeys, componentName } = props
  return (
    <ErrorBoundaryLib
      FallbackComponent={ErrorFallbackDefault}
      onError={errorHandler({ componentName: componentName || _get(props.children, 'type.displayName') || _get(props.children, 'type.name') })}
      onReset={onReset}
      resetKeys={resetKeys}
    >
      {props.children}
    </ErrorBoundaryLib>
  )
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  onReset: PropTypes.func,
  resetKeys: PropTypes.arrayOf(PropTypes.string),
  componentName: PropTypes.string,
}

ErrorBoundary.defaultProps = {
  onReset: undefined,
  resetKeys: [],
  componentName: '',
}

/* eslint-disable react/jsx-props-no-spreading */
export const withErrorBoundary = (errorBoundaryProps) => (Component) => {
  const WrappedByErrorBoundary = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  return WrappedByErrorBoundary
}

export default ErrorBoundary
