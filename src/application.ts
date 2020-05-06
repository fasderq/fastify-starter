import fastify, { FastifyInstance } from 'fastify';
import fastifyBlipp from 'fastify-blipp';
import fastifyCors from 'fastify-cors';
import fastifySwagger from 'fastify-swagger';
import { OK } from 'http-status-codes';
import { ApplicationOptions } from '@types';


export class Application {

    private readonly instance: FastifyInstance;
    private readonly opts: ApplicationOptions;

    constructor(opts: ApplicationOptions) {
        this.opts = opts;

        this.instance = fastify({ logger: true });
        this.registerThirdpartyPlugins();
        this.extraRoutes();
        this.ready();
    }

    protected registerThirdpartyPlugins(): void {
        this.instance.register(fastifyBlipp);
        this.instance.register(fastifyCors);
        this.instance.register(fastifySwagger, {
            routePrefix: '/swagger',
            swagger: {
                info: {
                    title: 'Swagger',
                    description: 'testing the fastify swagger api',
                    version: '0.1.0'
                },
                externalDocs: {
                    // url: 'https://swagger.io',
                    // description: 'Find more info here'
                },
                consumes: ['application/json'],
                produces: ['application/json'],
                tags: [
                    // { name: 'hello', description: 'User related end-points' },
                ],
                definitions: {
                    // User: {
                    //   $id: 'User',
                    //   type: 'object',
                    //   required: ['id', 'email'],
                    //   properties: {
                    //     id: { type: 'string', format: 'uuid' },
                    //     firstName: { type: 'string', nullable: true },
                    //     lastName: { type: 'string', nullable: true },
                    //     email: {type: 'string', format: 'email' }
                    //   }
                    // }
                },
                securityDefinitions: {
                    authorization: {
                        type: 'apiKey',
                        name: 'apiKey',
                        in: 'header'
                    }
                }
            },
            exposeRoute: true
        });
    }

    protected extraRoutes(): void {
        this.instance.route({
            url: '/',
            method: 'GET',
            schema: {
                hide: true,
                response: {
                    [OK]: {
                        type: 'object',
                        properties: {
                            hello: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
            handler: async () => {
                return {
                    hello: 'world',
                };
            },
        });
    }

    protected ready(): void {
        this.instance.ready((error): void => {
            if (error) {
                console.error(error);
                process.exit(1);
            }
        });
    }

    public getInstance(): FastifyInstance {
        return this.instance;
    }

    public async run(): Promise<void> {
        const { http: { host, port } } = this.opts;

        await this.instance.listen({ host, port });

        this.instance.blipp();
    }
}
