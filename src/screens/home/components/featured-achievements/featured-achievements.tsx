import { useQuery } from 'react-query'
import Link from 'next/link'

import { Achievements } from '~/components/achievements'
import { Anchor } from '~/components/anchor/anchor'
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
      <SectionHeader title="Logros" hasBetaTag>
        <Typography className="my-6">
          Logros destacados que he conseguido a lo largo de mi carrera,{' '}
          <Link href="/achievements" passHref>
            <Anchor variant="decorated">ver todo</Anchor>
          </Link>
          .
        </Typography>
      </SectionHeader>
      <Achievements achievements={achievements} />
    </Section>
  )
}
