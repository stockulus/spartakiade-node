import { Pool, QueryConfig } from 'pg'

import {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  POSTGRES_DATABASE
} from './env'

const pool = new Pool({
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  host: POSTGRES_HOST,
  database: POSTGRES_DATABASE,
  max: 20
})

export function query(queryTextOrConfig: string | QueryConfig, values?: any[]) {
  return pool.query(queryTextOrConfig, values)
}
