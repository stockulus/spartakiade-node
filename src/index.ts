import * as fastify from 'fastify'

import { PORT } from './env'

const server = fastify({ logger: true })

server.get('/', {}, (_, reply) => {
  reply.send('Hallo')
})

server.listen(PORT, () => console.log('Server is running'))
