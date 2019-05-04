// @flow

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import type { UserAlbum } from "../types";

interface Props {
  userAlbum: UserAlbum;
  onPress?: (album: UserAlbum) => void;
}

export const AlbumListItem = ({ userAlbum, onPress }: Props) => (
  <TouchableOpacity onPress={() => onPress ? onPress(userAlbum) : null}>
    <Text>{userAlbum.album.title}</Text>
    <Text>{userAlbum.user.name}</Text>
  </TouchableOpacity>
)
