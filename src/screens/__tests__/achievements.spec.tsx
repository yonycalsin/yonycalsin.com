import { screen, within } from '@testing-library/react'

import { achievementsSuccess } from 'mock-server/mocks'
import { setupWithReactQuery,TestProvider } from 'tests'
import { getAllAchievementsApi } from 'services'
import AchievementsScreen from 'screens/achievements'

jest.mock('services/achievements')

const mockGetAllAchievementsApi = getAllAchievementsApi as jest.Mock

function setup() {
  return setupWithReactQuery(
    <TestProvider>
      <AchievementsScreen />
    </TestProvider>,
  )
}

describe('AchievementsScreen', () => {
  it('renders the achievements screen', async () => {
    mockGetAllAchievementsApi.mockReturnValueOnce(achievementsSuccess)

    const view = setup()

    await screen.findByRole('progressbar')

    const list = await screen.findByRole('list', {
      name: /list of achievements/i,
    })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(achievementsSuccess.data.length)

    const title = screen.queryByRole('heading', { name: `Achievements (${achievementsSuccess.data.length})` })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
