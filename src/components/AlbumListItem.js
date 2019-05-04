// @flow

import React from "react";
import { View, Text } from "react-native";
import type { Album, User } from "../types";

interface Props {
  album: Album;
  user: User;
  onPress?: (album: Album) => void;
}

export const AlbumListItem = ({ album, user, onPress }: Props) => (
  <View onPress={() => onPress ? onPress(album) : null}>
    <Text>{album.title}</Text>
    <Text>{user.name}</Text>
  </View>
)
