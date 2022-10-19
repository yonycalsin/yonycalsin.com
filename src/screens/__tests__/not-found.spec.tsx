import { render } from '@testing-library/react'

import { TestProvider } from 'tests'
import NotFoundScreen from 'screens/not-found'

const setup = () => {
  return render(
    <TestProvider>
      <NotFoundScreen />
    </TestProvider>,
  )
}

describe('NotFoundScreen', () => {
  it('renders the not found screen', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })
})
