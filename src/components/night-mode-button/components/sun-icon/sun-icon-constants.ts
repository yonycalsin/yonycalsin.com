import { MOTION_TRANSITION } from 'utils/constants'

const RAYS_VARIANTS = {
  initial: { rotate: 45 },
  animate: { rotate: 0, transition: MOTION_TRANSITION },
}

const CORE_VARIANTS = {
  initial: { scale: 1.5 },
  animate: { scale: 1, transition: MOTION_TRANSITION },
}

export { CORE_VARIANTS, RAYS_VARIANTS }
