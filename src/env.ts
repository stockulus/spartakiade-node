export const PORT = parseInt(process.env.PORT, 10) || 3000
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'
export const BIND_ADDRESS = IS_DEVELOPMENT ? '127.0.0.1' : '0.0.0.0'

export const POSTGRES_USER = process.env.POSTGRES_USER || 'sparta'
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || 'sparta'
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE || 'sparta'
export const POSTGRES_HOST = process.env.POSTGRES_HOST || '127.0.0.1'
