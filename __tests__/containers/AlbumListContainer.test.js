// @flow
import React from "react";
import { shallow } from "enzyme";
import AlbumListContainer from "../../src/containers/AlbumListContainer";
import AlbumList from "../../src/components/AlbumList";
import AlbumImage from "../../src/components/AlbumImage";
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

  const navigateTo = jest.fn();

  beforeEach(() => {
    allAlbums = jest.fn().mockResolvedValue({ data: albums });
    Albums.all = allAlbums;

    allUsers = jest.fn().mockResolvedValue({ data: users });
    Users.all = allUsers;

    wrapper = shallow(<AlbumListContainer navigateTo={navigateTo} />);
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

  it("should navigate to the image_list route when an album is selected", () => {
    const userAlbum = { album: albums[0], user: users[0] };

    setImmediate(() => {
      const albumList = wrapper.find(AlbumList);
      albumList.simulate('select', userAlbum);

      expect(navigateTo).toHaveBeenCalledWith('image_list', { albumId: userAlbum.album.id });
    });
  });
});
