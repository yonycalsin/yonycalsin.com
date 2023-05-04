import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { featuredRecommendationsSuccess } from 'mock-server/mocks/recommendations'
import { Recommendations } from 'components'

const MOCK_RECOMMENDATIONS = featuredRecommendationsSuccess.data.results

const setup = () => render(<Recommendations recommendations={MOCK_RECOMMENDATIONS} />)

describe('Recommendations', () => {
  it('renders the recommendations', () => {
    const view = setup()

    const items = screen.queryAllByRole('listitem')

    expect(items).toHaveLength(MOCK_RECOMMENDATIONS.length)

    expect(view.baseElement).toMatchSnapshot()
  })
})
