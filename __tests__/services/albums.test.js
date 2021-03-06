import http from '../../src/services/http';
import MockAdapter from 'axios-mock-adapter';
import Albums from '../../src/services/albums';
import albums from '../fixtures/albums';

describe("Albums Service", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(http);
  });

  describe("all", () => {
    beforeEach(() => {
      mock.onGet('/albums').reply(200, albums );
    });

    it("should fetch albums", () => {
      return Albums.all().then(resp => expect(resp.data).toEqual(albums));
    });
  });
});
