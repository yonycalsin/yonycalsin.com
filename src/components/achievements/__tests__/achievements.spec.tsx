import { ChakraProvider } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'

import type { AchievementResponsePayload } from '~/typings/services/achievement/achievements'

import Achievements from '../achievements'

const defaultAchievements: AchievementResponsePayload[] = [
  {
    id: '1',
    title: 'Revelation of the year - 2022',
    shortDescription: 'I was recognized for incredible performance as a software developer in 2022 at CompanyName.',
    type: 'Work',
    date: '2022-09-13T00:34:27.889Z',
    isFeatured: true,
    isPublished: true,
  },
  {
    id: '2',
    title: 'Microsoft Hackaton',
    shortDescription: 'I created most creative application',
    type: 'Award',
    date: '2021-07-13T00:44:17.889Z',
    isFeatured: false,
    isPublished: true,
  },
  {
    id: '3',
    title: 'Harvard Business School',
    shortDescription: 'I created an amazing payment app',
    type: 'Education',
    date: '2019-07-11T00:54:23.889Z',
    isFeatured: true,
    isPublished: true,
  },
  {
    id: '4',
    title: 'Search Engine Bug',
    shortDescription: 'I found a bug in search engine',
    type: 'Security',
    date: '2021-02-16T00:24:24.889Z',
    isFeatured: true,
    isPublished: true,
  },
]

const setup = (achievements = defaultAchievements) => {
  return render(
    <ChakraProvider>
      <Achievements achievements={achievements} />
    </ChakraProvider>,
  )
}

describe('Achievements', () => {
  it('renders the achievements correctly', () => {
    const view = setup()

    const title = screen.queryByText(/Revelation of the year - 2022/)

    expect(title).toBeInTheDocument()

    expect(view.container).toMatchSnapshot()
  })
})
