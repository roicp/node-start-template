import { server, BASE_URL } from './setup';

describe('Messages', () => {
  test('get messages page', async () => {
    const response = await server.get(`${BASE_URL}/messages`);
    expect(response.statusCode).toBe(200);
    expect(response.body.messages).toBeArray();

    response.body.messages.forEach(m => {
      expect(m).toContainKeys(['name', 'message']);
    });
  });
});
