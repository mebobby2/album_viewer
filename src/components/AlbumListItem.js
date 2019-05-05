// @flow

import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import type { UserAlbum } from "../types";

interface Props {
  userAlbum: UserAlbum;
  onPress?: (album: UserAlbum) => void;
}

export const AlbumListItem = ({ userAlbum, onPress }: Props) => (
  <TouchableOpacity onPress={() => onPress ? onPress(userAlbum) : null} style={styles.container}>
    <Text>{userAlbum.album.title}</Text>
    <Text>Belongs to: {userAlbum.user.name}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
