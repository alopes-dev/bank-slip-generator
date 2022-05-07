import request from 'supertest';
import app from '../config/app';

describe('JSON Parser Middleware', () => {
  test('Should parse body as JSON', async () => {
    app.get('/test_json_parser', (req, res) => {
      res.send(req.body);
    });

    await request(app)
      .get('/test_json_parser')
      .send({ name: 'Lopes' })
      .expect({ name: 'Lopes' });
  });
});
