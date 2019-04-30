import * as fs from 'fs'
import * as path from 'path'

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

const createTableSql = fs.readFileSync(
  path.join(__dirname, 'create_tables.sql'),
  { encoding: 'utf8' }
)

export function init() {
  return query(createTableSql)
}

export function getAll(): Promise<Array<Todo>> {
  return query('select * from todo').then(result => {
    return result.rows
  })
}

export function createTodo(todo: Todo) {
  return query('insert into todo values ($1, $2, $3, $4)', [
    todo.id,
    todo.title,
    todo.comment,
    todo.done
  ]).then(() => {
    return true
  })
}

type Todo = {
  id: number
  title: string
  done: boolean
  comment: string
}
