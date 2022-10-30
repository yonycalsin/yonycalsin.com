import { screen } from '@testing-library/react'

import { allProjectsSuccess } from 'mock-server/mocks/projects'
import { overrideFeatures, setupWithReactQuery, TEST_ENVS } from 'tests'
import { getAllProjectsApi } from 'services'
import ProjectsScreen from 'screens/projects'
import { getRandomBadgeColors } from 'utils'

jest.mock('utils/get-random-badge-colors')

const mockGetRandomBadgeColors = getRandomBadgeColors as jest.Mock

const setup = () => {
  const utils = setupWithReactQuery(<ProjectsScreen />)

  return utils
}

jest.mock('services/projects')

const mockGetAllProjectsApi = getAllProjectsApi as jest.Mock

describe('ProjectsScreen', () => {
  beforeAll(() => {
    process.env = overrideFeatures({})
  })

  beforeEach(() => {
    mockGetRandomBadgeColors.mockReturnValue('red')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    process.env = TEST_ENVS
  })

  it('renders the projects screen', async () => {
    mockGetAllProjectsApi.mockReturnValueOnce(allProjectsSuccess)

    const view = setup()

    await screen.findByRole('progressbar')

    await screen.findByRole('list', { name: /list of projects/i })

    expect(mockGetAllProjectsApi).toHaveBeenCalledTimes(1)

    expect(view.baseElement).toMatchSnapshot()
  })
})
