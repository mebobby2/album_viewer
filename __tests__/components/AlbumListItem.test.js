// @flow
import React from "react";
import { AlbumListItem } from "../../src/components/AlbumListItem";
import type { Album, User, UserAlbum } from "../../src/types";
import { shallow } from "enzyme";
import { Text } from "react-native";

describe("AlbumListItem", () => {
  const album: Album = { id: 1, userId: 1, title: "Some Album Name" };
  const user: User = { id: 1, name: "Some User Name" };
  const userAlbum: UserAlbum = { user, album };
  let onPress;
  let wrapper;

  beforeEach(() => {
    onPress = jest.fn();
    wrapper = shallow(<AlbumListItem userAlbum={userAlbum} onPress={onPress} />);
  });

  it("should render the name of the album", () => {
    expect(wrapper.containsMatchingElement(<Text>{album.title}</Text>)).toBeTruthy();
  });

  it("should render the name of the user", () => {
    expect(wrapper.containsMatchingElement(<Text>Belongs to: {user.name}</Text>)).toBeTruthy();
  });

  describe("onPress", () => {
    it("should notify when pressed", () => {
      wrapper.simulate('press');

      expect(onPress).toHaveBeenCalledWith(userAlbum);
    });

    it("should not notify if no callback is present", () => {
      wrapper.setProps({ onPress: undefined });
      wrapper.simulate('press');

      expect(onPress).not.toHaveBeenCalled();
    });
  })

});
