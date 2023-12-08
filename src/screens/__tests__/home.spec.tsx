import * as React from 'react'
import { render, screen, within } from '@testing-library/react'

import { achievementsSuccess, featuredRecommendationsSuccess, pinnedProjectsSuccess } from 'mock-server/mocks'
import { overrideFeatures, TEST_ENVS } from 'tests'
import { getFeaturedAchievementsApi, getFeaturedRecommendationsApi, getPinnedProjectsApi } from 'services'
import HomeScreen from 'screens/home'
import { Features } from 'utils/constants'

const setup = () => {
  const utils = render(<HomeScreen />)

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

    process.env = TEST_ENVS
  })

  it('renders the home screen', () => {
    process.env = overrideFeatures({})

    const view = setup()

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the pinned projects section', () => {
    process.env = overrideFeatures({
      [Features.PINNED_PROJECTS]: true,
    })

    mockGetPinnedProjectsApi.mockReturnValueOnce(pinnedProjectsSuccess)

    const view = setup()

    const list = screen.getByRole('list', { name: /list of featured projects/i })

    const items = within(list).queryAllByRole('listitem')

    expect(items).toHaveLength(pinnedProjectsSuccess.data.results.length)

    expect(mockGetPinnedProjectsApi).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the achievements section', () => {
    process.env = overrideFeatures({
      [Features.ACHIEVEMENTS]: true,
    })

    mockGetFeaturedAchievements.mockReturnValueOnce(achievementsSuccess)

    const view = setup()

    const list = screen.getByRole('list', { name: /list of achievements/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(achievementsSuccess.data.results.length)

    expect(mockGetFeaturedAchievements).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })

  it('renders the recommendations section', () => {
    process.env = overrideFeatures({
      [Features.RECOMMENDATIONS]: true,
    })

    mockGetFeaturedRecommendations.mockReturnValueOnce(featuredRecommendationsSuccess)

    const view = setup()

    const list = screen.getByRole('list', { name: /list of recommendations/i })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(featuredRecommendationsSuccess.data.results.length)

    expect(mockGetFeaturedRecommendations).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })
})
