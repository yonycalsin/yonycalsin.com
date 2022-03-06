import { useQuery } from 'react-query'

import { Achievements } from '~/components/achievements'
import { Section } from '~/components/section/section'
import { SectionHeader } from '~/components/section/section-header'
import { Typography } from '~/components/typography/typography'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import { queryKeys } from '~/utils/constants'

export function FeaturedAchievements() {
  const queryResult = useQuery<IAchievementQueryWithMeta>(queryKeys.FEATURED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  const achievements = queryResult.data?.data ?? []

  return (
    <Section>
      <SectionHeader title="Achievements">
        <Typography className="my-3">Things I Have Achieved</Typography>
      </SectionHeader>
      <Achievements achievements={achievements} />
    </Section>
  )
}
