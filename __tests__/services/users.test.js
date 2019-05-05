import http from '../../src/services/http';
import MockAdapter from 'axios-mock-adapter';
import Users from '../../src/services/users';
import users from '../fixtures/users';

describe("Users Service", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(http);
  });

  describe("all", () => {
    beforeEach(() => {
      mock.onGet('/users').reply(200, users);
    });

    it("should fetch albums", () => {
      return Users.all().then(resp => expect(resp.data).toEqual(users));
    });
  });
});
