function buildMdxRuntimeCode(customCode: string) {
  const builded = `
    const Component = (function() {
        return {
            default: function (props) {
                const c = props.components || {}

                const jsx = _jsx_runtime.jsx
                
                return ${customCode}
            }
        }
    })()

    return Component
  `

  return builded
}

export default buildMdxRuntimeCode
