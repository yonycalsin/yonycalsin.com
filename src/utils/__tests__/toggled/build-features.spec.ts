import { Features } from 'utils/constants'
import { buildFeatures } from 'utils/toggled'

describe('buildFeatures', () => {
  it('enables features', () => {
    const result = buildFeatures({
      [Features.BLOG]: true,
    })

    expect(result).toStrictEqual(
      expect.arrayContaining([
        {
          slug: Features.BLOG,
        },
      ]),
    )
  })

  it('disables features', () => {
    const result = buildFeatures({
      [Features.BLOG]: false,
    })

    expect(result).toStrictEqual(
      expect.not.arrayContaining([
        {
          slug: Features.BLOG,
        },
      ]),
    )
  })

  it('enables and disables features', () => {
    const result = buildFeatures({
      [Features.PINNED_PROJECTS]: false,
      [Features.BLOG]: true,
      [Features.ACHIEVEMENTS]: true,
      [Features.PROJECTS]: false,
    })

    expect(result).toStrictEqual(
      expect.arrayContaining([
        {
          slug: Features.BLOG,
        },
        {
          slug: Features.ACHIEVEMENTS,
        },
      ]),
    )

    expect(result).toStrictEqual(
      expect.not.arrayContaining([
        {
          slug: Features.PINNED_PROJECTS,
        },
        {
          slug: Features.PROJECTS,
        },
      ]),
    )
  })
})
