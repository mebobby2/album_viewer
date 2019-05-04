// @flow
import React from "react";
import { AlbumListItem } from "../../src/components/AlbumListItem";
import type { Album, User } from "../../src/types";
import { shallow } from "enzyme";
import { Text } from "react-native";

describe("AlbumListItem", () => {
  const album: Album = { id: 1, userId: 1, title: "Some Album Name" };
  const user: User = { id: 1, name: "Some User Name" };
  const wrapper = shallow(<AlbumListItem album={album} user={user} />);

  it("should render the name of the album", () => {
    expect(wrapper.containsMatchingElement(<Text>{album.title}</Text>)).toBeTruthy();
  });

  it("should render the name of the user", () => {
    expect(wrapper.containsMatchingElement(<Text>{user.name}</Text>)).toBeTruthy();
  });
});
