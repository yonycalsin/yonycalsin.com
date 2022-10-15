import { MOTION_TRANSITION, MOTION_WHILE_TYPE_VARIANT } from 'utils/constants'

const VARIANTS = {
  initial: { scale: 0.6, rotate: 90 },
  animate: { scale: 1, rotate: 0, transition: MOTION_TRANSITION },
  whileTap: MOTION_WHILE_TYPE_VARIANT,
}

export { VARIANTS }
