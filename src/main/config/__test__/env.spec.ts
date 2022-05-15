import env from '../env'

describe('env config', () => {
  test('should load the correct env variables', async () => {
    expect(env.port).toBe( process.env.PORT || 8080);
  });
});
