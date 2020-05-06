/// <reference types="node" />

import {
    Server,
    IncomingMessage,
    ServerResponse,
} from 'http';

declare module 'fastify' {

    interface FastifyInstance<
        HttpServer = Server,
        HttpRequest = IncomingMessage,
        HttpResponse = ServerResponse,
        > {
    }

    interface FastifyRequest<
        HttpRequest = IncomingMessage,
        Query = DefaultQuery,
        Params = DefaultParams,
        Headers = DefaultHeaders,
        Body = DefaultBody
        > {
    }
}
