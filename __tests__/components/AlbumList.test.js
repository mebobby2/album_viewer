// @flow
import React from "react";
import type { Album, User } from "../../src/types";
import { shallow } from "enzyme";
import AlbumList from "../../src/components/AlbumList";

describe("AlbumList", () => {
  const album1: Album = { id: 1, userId: 1, title: "Some Album Name 1" };
  const user1: User = { id: 1, name: "Some User Name 1" };

  const album2: Album = { id: 1, userId: 1, title: "Some Album Name 2" };
  const user2: User = { id: 1, name: "Some User Name 2" };

  const userAlbums = [
    { user: user1, album: album1 },
    { user: user2, album: album2 },
  ]

  let wrapper = shallow(<AlbumList userAlbums={userAlbums} />);

  it("should render the list of user albums", () => {
    const list = wrapper.find('FlatList');

    expect(list.prop('data')).toEqual(userAlbums);
  });

  it("should render each user album as an AlbumListItem", () => {
    const list = wrapper.find('FlatList');
    const userAlbum = userAlbums[0];

    const renderItem = list.prop('renderItem');
    const item = renderItem({ item: userAlbum });
    expect(item.type.name).toEqual('AlbumListItem');
    expect(item.props.userAlbum).toEqual(userAlbum);
  })
});
