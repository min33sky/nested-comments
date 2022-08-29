import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

server.listen({
  port: 4000,
});

console.log('Server on~~~~');
