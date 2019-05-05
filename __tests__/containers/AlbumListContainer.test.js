// @flow
import React from "react";
import { shallow } from "enzyme";
import AlbumListContainer from "../../src/containers/AlbumListContainer";
import AlbumList from "../../src/components/AlbumList";
import Albums from "../../src/services/albums";
import Users from "../../src/services/users";
import Photos from "../../src/services/photos";
import albums from "../fixtures/albums";
import users from "../fixtures/users";
import filteredPhotos from "../fixtures/filteredPhotos";

describe("AlbumListContainer", () => {
  let wrapper;
  let allAlbums;
  let allUsers;
  let allPhotos;

  beforeEach(() => {
    allAlbums = jest.fn().mockResolvedValue({ data: albums });
    Albums.all = allAlbums;

    allUsers = jest.fn().mockResolvedValue({ data: users });
    Users.all = allUsers;

    wrapper = shallow(<AlbumListContainer />);
  });

  it("fetch the albums", () => {
    expect(allAlbums).toHaveBeenCalled();
  });

  it("fetch the users", () => {
    setImmediate(() => {
      expect(allUsers).toHaveBeenCalled();
    })
  });

  it("should render the AlbumList component", () => {
    setImmediate(() => {
      const albumList = wrapper.find(AlbumList);

      expect(albumList).toExist();
      expect(albumList.prop('userAlbums')).toEqual(
        [
          {
            album: albums[0],
            user: users[0],
          },
          {
            album: albums[1],
            user: users[1],
          }
        ]
      );
    });
  });

  describe("when a album is selected", () => {

    beforeEach(() => {
      allPhotos = jest.fn().mockResolvedValue({ data: filteredPhotos });
      Photos.all = allPhotos;
    });

    it("should fetch the album's photos", () => {
      setImmediate(() => {
        const albumList = wrapper.find(AlbumList);
        const userAlbum = { album: albums[0], user: users[0] };
        albumList.simulate('select', userAlbum);

        expect(allPhotos).toHaveBeenCalledWith(userAlbum.album.id);
      });
    });

    it("should show the thumbnail image", () => {

    });
  });
});
