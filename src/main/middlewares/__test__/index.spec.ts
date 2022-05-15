import * as index from '../index'

describe('imports', () => {
  test('should imports all middlewares as well', async () => {
    expect(index.contentType).toBeTruthy();
    expect(index.cors).toBeTruthy();
    expect(index.jsonParser).toBeTruthy();
  });
});
