import { FastifyPluginAsync } from 'fastify';
import PostsRoute from './posts';

const api: FastifyPluginAsync = async (fastify) => {
  fastify.register(PostsRoute, { prefix: '/posts' });
};

export default api;
