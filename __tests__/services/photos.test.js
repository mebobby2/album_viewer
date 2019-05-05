import http from '../../src/services/http';
import MockAdapter from 'axios-mock-adapter';
import Photos from '../../src/services/photos';
import allPhotos from '../fixtures/allPhotos';
import filteredPhotos from '../fixtures/filteredPhotos';

describe("Photos Service", () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(http);
  });

  describe("#all", () => {
    it("should fetch photos", () => {
      mock.onGet('/photos').reply(200, allPhotos );
      return Photos.all().then(resp => expect(resp.data).toEqual(allPhotos));
    });

    it("should filter by albumId", () => {
      mock.onGet('/photos?albumId=1').reply(200, filteredPhotos );
      return Photos.all(1).then(resp => expect(resp.data).toEqual(filteredPhotos));
    });
  });
});
