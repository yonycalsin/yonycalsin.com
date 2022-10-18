import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { screen } from '@testing-library/react'
import { DefaultFeature, FeatureProvider } from 'toggled'

import { achievementsSuccess } from 'mock-server/mocks/achievements'
import { pinnedProjectsSuccess } from 'mock-server/mocks/projects'
import { featuredRecommendationsSuccess } from 'mock-server/mocks/recommendations'
import { setupWithReactQuery } from 'tests'
import { getFeaturedAchievementsApi, getFeaturedRecommendationsApi, getPinnedProjectsApi } from 'services'
import { ThemeMain } from 'themes'
import HomeScreen from 'screens/home'
import { buildFeatures } from 'utils'
import { Features } from 'utils/constants'

const setup = (features: DefaultFeature[] = []) => {
  const utils = setupWithReactQuery(
    <ChakraProvider theme={ThemeMain}>
      <ChakraKBar>
        <FeatureProvider features={features}>
          <HomeScreen />
        </FeatureProvider>
      </ChakraKBar>
    </ChakraProvider>,
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

  it('renders the pinned projects section', () => {
    mockGetPinnedProjectsApi.mockReturnValueOnce(pinnedProjectsSuccess)

    const view = setup(
      buildFeatures({
        [Features.PINNED_PROJECTS]: true,
      }),
    )

    expect(mockGetPinnedProjectsApi).toHaveBeenCalledTimes(1)

    const title = screen.queryByRole('heading', { name: /featured projects/i })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the achievements section', () => {
    mockGetFeaturedAchievements.mockReturnValueOnce(achievementsSuccess)

    const view = setup(
      buildFeatures({
        [Features.ACHIEVEMENTS]: true,
      }),
    )

    expect(mockGetFeaturedAchievements).toHaveBeenCalledTimes(1)

    const title = screen.queryByRole('heading', { name: /achievements/i })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the recommendations section', async () => {
    mockGetFeaturedRecommendations.mockReturnValueOnce(featuredRecommendationsSuccess)

    const view = setup(
      buildFeatures({
        [Features.RECOMMENDATIONS]: true,
      }),
    )

    expect(mockGetFeaturedRecommendations).toHaveBeenCalledTimes(1)

    const title = screen.queryByRole('heading', { name: /recommendations/i })

    expect(title).toBeInTheDocument()

    expect(view.baseElement).toMatchSnapshot()
  })
})
