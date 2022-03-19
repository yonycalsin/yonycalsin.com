import { useQuery } from 'react-query'

import { Achievements } from '~/components/achievements'
import { Meta } from '~/components/meta'
import { Typography } from '~/components/typography/typography'
import { MainLayout } from '~/layouts'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import { queryKeys } from '~/utils/constants'

function AchievementsScreen() {
  const queryResult = useQuery<IAchievementQueryWithMeta>(queryKeys.PUBLISHED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  const achievementsData = queryResult.data?.data ?? []

  return (
    <MainLayout>
      <Meta title="Logros" notRobots />
      <article className="py-8">
        <header>
          <Typography variant="h2" gutterBottom fontWeight="extrabold">
            Logros ({achievementsData.length})
          </Typography>
          <Typography gutterBottom>
            En esta página le mostraré todos los logros que he conseguido a lo largo de mi carrera.
          </Typography>
        </header>
        <Achievements achievements={achievementsData} />
      </article>
    </MainLayout>
  )
}

export default AchievementsScreen
