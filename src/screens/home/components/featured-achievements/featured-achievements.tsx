import * as React from 'react'
import { useQuery } from 'react-query'
import { Box, Link } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { Achievements } from '~/components/achievements'
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
    <Box py="3">
      <SectionHeader title="Logros">
        <Typography className="my-6">
          Logros destacados que he conseguido a lo largo de mi carrera,{' '}
          <RouterLink href="/achievements" passHref>
            <Link color="primary.500">ver todo</Link>
          </RouterLink>
          .
        </Typography>
      </SectionHeader>
      <Achievements achievements={achievements} />
    </Box>
  )
}
