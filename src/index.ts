import * as fastify from 'fastify'

import { PORT } from './env'

type Todo = {
  id: number
  title: string
  done: boolean
  comment: string
}

const todos: Array<Todo> = [
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

function main() {
  const server = fastify({ logger: true })

  server.get('/', (_, reply) => {
    reply.send(todos)
  })

  server.post('/', (request, reply) => {
    todos.push({ ...request.body, id: todos.length + 1 })
    reply.send({ id: todos.length })
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
