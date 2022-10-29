import { render } from '@testing-library/react'

import { overrideFeatures, TEST_ENVS, TestProvider } from 'tests'
import NotFoundScreen from 'screens/not-found'

const setup = () => {
  return render(
    <TestProvider>
      <NotFoundScreen />
    </TestProvider>,
  )
}

describe('NotFoundScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures({})
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the not found screen', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })
})
