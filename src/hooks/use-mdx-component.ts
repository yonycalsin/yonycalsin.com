import * as React from 'react'
import _jsx_runtime from 'react/jsx-runtime'
import ReactDOM from 'react-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMdxComponent(code: string): React.ComponentType<any> {
  const scope = {
    React,
    ReactDOM,
    _jsx_runtime,
  }

  const fn = new Function(...Object.keys(scope), code)

  return fn(...Object.values(scope)).default
}

function useMDXComponent(code: string) {
  return React.useMemo(() => getMdxComponent(code), [code])
}

export default useMDXComponent
