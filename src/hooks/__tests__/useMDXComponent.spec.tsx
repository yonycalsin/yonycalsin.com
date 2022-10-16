import { render, renderHook, screen } from '@testing-library/react'

import { useMDXComponent } from 'hooks'
import { buildMdxRuntimeCode } from 'utils'

describe('useMDXComponent', () => {
  it('returns the mdx processed code', () => {
    const utils = renderHook(() => useMDXComponent(buildMdxRuntimeCode(`jsx('p', {children: 'Hello World'})`)))

    const Component = utils.result.current

    expect(Component).toStrictEqual(expect.any(Function))

    const view = render(<Component />)

    const content = screen.queryByText(/hello world/i)

    expect(content).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
