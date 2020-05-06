import { Application } from '@app/application';
import { Server } from 'http';
import request from 'supertest';

describe('/', () => {
    let server: Server;

    beforeAll(() => { });
    beforeEach(async () => {
        const app: Application = new Application();
        server = app.getInstance().server;
    });

    it('GET /', async () => {
        const { status, body } = await request(server)
            .get('/');

        expect(status).toStrictEqual(200);

        expect(body).toHaveProperty('hello');
        expect(body['hello']).toStrictEqual('world');
    });

    afterAll(() => {
        server.close();
    });
});
