import http from '../../src/services/http';
import MockAdapter from 'axios-mock-adapter';
import Albums from '../../src/services/albums';

describe("Albums Service", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(http);
  });

  describe("all", () => {
    const albums = [{
      userId: 1,
      id: 1,
      title: "quidem molestiae enim"
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa"
    }]

    beforeEach(() => {
      mock.onGet('/albums').reply(200, albums );
    });


    it("should fetch albums", () => {
      return Albums.all().then(resp => expect(resp.data).toEqual(albums));
    });
  });
});
