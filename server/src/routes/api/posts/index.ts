import { FastifyPluginAsync } from 'fastify';
import db from '../../../lib/db';
import sensible from '@fastify/sensible';

const PostsRoute: FastifyPluginAsync = async (fastify) => {
  fastify.register(sensible);

  /**
   * 게시물 목록 조회
   */
  fastify.get('/', async (request, reply) => {
    const items = await commitToDb(
      db.post.findMany({
        select: {
          id: true,
          title: true,
        },
      }),
    );
    return items;
  });

  fastify.get<GetPostRoute>('/:id', async (request, reply) => {
    const post = await commitToDb(
      db.post.findUnique({
        where: {
          id: request.params.id,
        },
        select: {
          id: true,
          title: true,
          body: true,
          comments: {
            orderBy: {
              createdAt: 'desc',
            },
            select: {
              id: true,
              message: true,
              parentId: true,
              createdAt: true,
              user: {
                select: {
                  id: true,
                  name: true,
                },
              },
              _count: {
                select: {
                  likes: true,
                },
              },
            },
          },
        },
      }),
    );

    return post;
  });

  async function commitToDb(promise: Promise<any>) {
    const [error, data] = await fastify.to(promise);
    if (error) return fastify.httpErrors.internalServerError(error.message);
    return data;
  }

  interface GetPostRoute {
    Params: {
      id: string;
    };
  }
};

export default PostsRoute;
