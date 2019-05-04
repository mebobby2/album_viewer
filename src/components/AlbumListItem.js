// @flow

import React from "react";
import { View, Text } from "react-native";
import type { UserAlbum } from "../types";

interface Props {
  userAlbum: UserAlbum;
  onPress?: (album: Album) => void;
}

export const AlbumListItem = ({ userAlbum, onPress }: Props) => (
  <View onPress={() => onPress ? onPress(userAlbum) : null}>
    <Text>{userAlbum.album.title}</Text>
    <Text>{userAlbum.user.name}</Text>
  </View>
)
