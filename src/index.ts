import * as fastify from 'fastify'

import { init as initDb, getAll as getAllTodos, createTodo } from './db'
import { PORT } from './env'

const todos = [
  {
    id: 1,
    title: 'DB Ticket',
    done: true,
    comment: 'Berlin -> Köln'
  },
  {
    id: 2,
    title: 'DB Starten',
    done: false,
    comment: 'Postgres'
  }
]

async function main() {
  await initDb()

  const server = fastify({ logger: true })

  server.get('/', (_, reply) => {
    getAllTodos().then(todos => {
      reply.send(todos)
    })
  })

  server.post('/', (request, reply) => {
    createTodo(request.body)
      .then(() => {
        reply.send({})
      })
      .catch(error => reply.status(400).send(error))
  })

  server.put(
    '/:id',
    {
      schema: {
        params: {
          id: { type: 'number' }
        }
      }
    },
    (request, reply) => {
      const id = parseInt(request.params.id, 10)
      if (id <= 0 || id > todos.length) {
        reply.status(404).send()
        return
      }
      todos[id - 1] = { ...todos[id - 1], ...request.body }
      reply.status(204).send()
    }
  )

  server.listen(PORT)
}

main()
