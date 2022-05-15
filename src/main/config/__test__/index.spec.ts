import * as index from '../index'

describe('imports', () => {
  test('should imports all configs as well', async () => {
    expect(index.app).toBeTruthy();
    expect(index.env).toBeTruthy();
    expect(index.setupApp).toBeTruthy();
    expect(index.setupRouter).toBeTruthy();
  });
});
