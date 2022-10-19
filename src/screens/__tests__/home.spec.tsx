import { screen, within } from '@testing-library/react'

import type { MainTestProviderProps } from 'typings/tests'
import { achievementsSuccess } from 'mock-server/mocks/achievements'
import { pinnedProjectsSuccess } from 'mock-server/mocks/projects'
import { featuredRecommendationsSuccess } from 'mock-server/mocks/recommendations'
import { setupWithReactQuery, TestProvider } from 'tests'
import { getFeaturedAchievementsApi, getFeaturedRecommendationsApi, getPinnedProjectsApi } from 'services'
import HomeScreen from 'screens/home'
import { buildFeatures } from 'utils'
import { Features } from 'utils/constants'

const setup = (features: MainTestProviderProps['features'] = []) => {
  const utils = setupWithReactQuery(
    <TestProvider features={features}>
      <HomeScreen />
    </TestProvider>,
  )

  return utils
}

jest.mock('services/projects')

const mockGetPinnedProjectsApi = getPinnedProjectsApi as jest.Mock

jest.mock('services/achievements')

const mockGetFeaturedAchievements = getFeaturedAchievementsApi as jest.Mock

jest.mock('services/recommendations')

const mockGetFeaturedRecommendations = getFeaturedRecommendationsApi as jest.Mock

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the home screen', () => {
    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the pinned projects section', async () => {
    mockGetPinnedProjectsApi.mockReturnValueOnce(pinnedProjectsSuccess)

    const view = setup(
      buildFeatures({
        [Features.PINNED_PROJECTS]: true,
      }),
    )

    await screen.findByRole('progressbar')

    const list = await screen.findByRole('list', { name: /list of featured projects/i })

    const items = within(list).queryAllByRole('listitem')

    expect(items).toHaveLength(pinnedProjectsSuccess.data.length)

    expect(mockGetPinnedProjectsApi).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the achievements section', async () => {
    mockGetFeaturedAchievements.mockReturnValueOnce(achievementsSuccess)

    const view = setup(
      buildFeatures({
        [Features.ACHIEVEMENTS]: true,
      }),
    )

    await screen.findByRole('progressbar')

    const list = await screen.findByRole('list', { name: /list of achievements/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(achievementsSuccess.data.length)

    expect(mockGetFeaturedAchievements).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the recommendations section', async () => {
    mockGetFeaturedRecommendations.mockReturnValueOnce(featuredRecommendationsSuccess)

    const view = setup(
      buildFeatures({
        [Features.RECOMMENDATIONS]: true,
      }),
    )

    await screen.findByRole('progressbar')

    const list = await screen.findByRole('list', { name: /list of recommendations/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(featuredRecommendationsSuccess.data.length)

    expect(mockGetFeaturedRecommendations).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })
})
