// @flow

import React from "react";
import { View, Text } from "react-native";
import { Album, User } from "../types";

interface Props {
  album: Album;
  user: User;
}

export const AlbumListItem = ({ album, user }: Props) => (<View>
  <Text>{album.title}</Text>
  <Text>{user.name}</Text>
</View>)
