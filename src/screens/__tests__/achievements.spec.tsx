import { screen, within } from '@testing-library/react'

import { achievementsSuccess } from 'mock-server/mocks'
import { overrideFeatures, setupWithReactQuery, TEST_ENVS } from 'tests'
import { getAllAchievementsApi } from 'services'
import AchievementsScreen from 'screens/achievements'

jest.mock('services/achievements')

const mockGetAllAchievementsApi = getAllAchievementsApi as jest.Mock

function setup() {
  return setupWithReactQuery(<AchievementsScreen />)
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

    expect(items).toHaveLength(achievementsSuccess.data.length)

    const title = screen.queryByRole('heading', { name: `Achievements (${achievementsSuccess.data.length})` })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
