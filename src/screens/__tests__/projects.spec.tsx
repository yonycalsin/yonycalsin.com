import { ChakraProvider } from '@chakra-ui/react'
import { ChakraKBar } from '@chakra-ui-kbar/core'
import { screen } from '@testing-library/react'
import { FeatureProvider } from 'toggled'

import { allProjectsSuccess } from 'mock-server/mocks/projects'
import { setupWithReactQuery } from 'tests'
import { getAllProjectsApi } from 'services'
import { ThemeMain } from 'themes'
import ProjectsScreen from 'screens/projects'
import { getRandomBadgeColors } from 'utils'

jest.mock('utils/get-random-badge-colors')

const mockGetRandomBadgeColors = getRandomBadgeColors as jest.Mock

const setup = () => {
  const utils = setupWithReactQuery(
    <ChakraProvider theme={ThemeMain}>
      <FeatureProvider features={[]}>
        <ChakraKBar>
          <ProjectsScreen />
        </ChakraKBar>
      </FeatureProvider>
    </ChakraProvider>,
  )

  return utils
}

jest.mock('services/projects')

const mockGetAllProjectsApi = getAllProjectsApi as jest.Mock

describe('ProjectsScreen', () => {
  beforeEach(() => {
    mockGetRandomBadgeColors.mockReturnValue('red')
  })

  afterEach(() => {
    jest.clearAllMocks()
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
