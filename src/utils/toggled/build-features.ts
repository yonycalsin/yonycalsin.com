import type { DefaultFeature } from 'toggled'

import type { Features } from 'utils/constants'

function buildFeatures(features: Partial<Record<Features, boolean>>) {
  const buildFeatures: DefaultFeature[] = []

  for (const [feature, value] of Object.entries(features)) {
    if (!value) {
      continue
    }

    buildFeatures.push({
      slug: feature,
    })
  }

  return buildFeatures
}

export default buildFeatures
