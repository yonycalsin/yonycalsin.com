import env from './env'

const isProduction = env.APP_ENV === 'production'

export default isProduction
