import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import process from 'node:process';

const fastify = Fastify({ logger: true });

fastify.get('/health', async () => ({ status: 'ok' }));

interface GenerateBody {
  component: string;
  props?: Record<string, unknown>;
}

fastify.post('/generate', async (request: FastifyRequest<{ Body: GenerateBody }>, reply: FastifyReply) => {
  // TODO: recibir payload y usar ts-morph para generar archivos
  return {
    message: 'Placeholder generation',
    traceId: 'demo-trace',
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3003, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 