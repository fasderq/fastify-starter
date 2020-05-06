import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { ApplicationOptions } from '@types';

export const opts = fastifyPlugin(async (
    fastify: FastifyInstance,
    options: ApplicationOptions
) => {
    fastify.decorate('opts', options);
}, {
    name: 'opts',
});
