import { server, BASE_URL } from './setup';

describe('Index page test', () => {
    test('It should response the GET method', async () => {
        const response = await server.get(`${BASE_URL}/`);
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Environment variable is coming across.');
    });
});
