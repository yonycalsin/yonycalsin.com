import { render, screen } from '@testing-library/react'

import type { AchievementResponsePayload } from 'typings/services'
import { achievementsSuccess } from 'mock-server/mocks/achievements'
import { Achievements } from 'components'

const defaultAchievements: AchievementResponsePayload[] = achievementsSuccess.data.results

const setup = (achievements = defaultAchievements) => {
  return render(<Achievements achievements={achievements} />)
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
