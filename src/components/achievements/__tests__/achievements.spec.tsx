import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import Achievements from '../achievements'

dayjs.extend(timezone)

dayjs.extend(utc)

describe('Achievements', () => {
  beforeAll(() => {
    dayjs.tz.setDefault('America/New_York')
  })

  it('renders the achievements correctly', () => {
    const view = render(
      <Achievements
        achievements={[
          {
            id: '1b3a2004-226a-4dbf-8e7f-9c60ecdb8605',
            title: 'Revelation of the year - 2022',
            shortDescription:
              'I was recognized for incredible performance as a software developer in 2022 at CompanyName.',
            type: 'Work',
            date: dayjs('2021-12-29').toISOString(),
            isFeatured: true,
            isPublished: true,
          },
        ]}
      />,
    )

    screen.getByText(/Revelation of the year - 2022/)

    expect(view.container).toMatchSnapshot()
  })
})
