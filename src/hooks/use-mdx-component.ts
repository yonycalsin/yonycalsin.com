import * as React from 'react'
import _jsx_runtime from 'react/jsx-runtime'
import ReactDOM from 'react-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMdxComponent(code: string): React.ComponentType<{ components?: Record<string, any> }> {
  const scope = {
    React,
    ReactDOM,
    _jsx_runtime,
  }

  // eslint-disable-next-line @typescript-eslint/no-implied-eval
  const fn = new Function(...Object.keys(scope), code)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  return fn(...Object.values(scope)).default as React.ComponentType<{ components?: Record<string, any> }>
}

function useMDXComponent(code: string) {
  return React.useMemo(() => getMdxComponent(code), [code])
}

export default useMDXComponent
