import { render, screen } from '@testing-library/react'

import type { AchievementResponsePayload } from 'typings/services'
import { achievementsSuccess } from 'mock-server/mocks/achievements'
import { TestProvider } from 'tests'
import { Achievements } from 'components'

const defaultAchievements: AchievementResponsePayload[] = achievementsSuccess.data

const setup = (achievements = defaultAchievements) => {
  return render(
    <TestProvider>
      <Achievements achievements={achievements} />
    </TestProvider>,
  )
}

describe('Achievements', () => {
  it('renders the achievements correctly', () => {
    const view = setup()

    const title = screen.queryByText(/Revelation of the year - 2022/)

    expect(title).toBeInTheDocument()

    const items = screen.getAllByRole('listitem')

    expect(items).toHaveLength(defaultAchievements.length)

    expect(view.container).toMatchSnapshot()
  })
})
