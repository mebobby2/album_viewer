// @flow
import React from "react";
import { shallow } from "enzyme";
import AlbumListContainer from "../../src/containers/AlbumListContainer";
import Albums from "../../src/services/albums";
import Users from "../../src/services/users";
import albums from "../fixtures/albums";
import users from "../fixtures/users";

describe("AlbumListContainer", () => {
  let wrapper;
  let allAlbums;
  let allUsers;

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
      const albumList = wrapper.find("AlbumList");

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
});
