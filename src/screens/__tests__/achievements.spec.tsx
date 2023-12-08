import * as React from 'react'
import { render, screen, within } from '@testing-library/react'

import { achievementsSuccess } from 'mock-server/mocks'
import { overrideFeatures, TEST_ENVS } from 'tests'
import { getAllAchievementsApi } from 'services'
import AchievementsScreen from 'screens/achievements'

jest.mock('services/achievements')

const mockGetAllAchievementsApi = getAllAchievementsApi as jest.Mock

function setup() {
  return render(<AchievementsScreen />)
}

describe('AchievementsScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the achievements screen', () => {
    mockGetAllAchievementsApi.mockReturnValueOnce(achievementsSuccess)

    const view = setup()

    const list = screen.getByRole('list', {
      name: /list of achievements/i,
    })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(achievementsSuccess.data.results.length)

    const title = screen.queryByRole('heading', { name: `Achievements (${achievementsSuccess.data.results.length})` })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
