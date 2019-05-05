// @flow

import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { AlbumListItem } from "./AlbumListItem";
import type { UserAlbum } from "../types";

interface Props {
  userAlbums: UserAlbum[];
  onSelect: (album: UserAlbum) => any;
}

const Header = () => (<View style={styles.header}><Text>Album List</Text></View>);
const Separator = () => (<View style={styles.separator} />);

export default ({ userAlbums, onSelect }: Props) => (
  <FlatList
    ListHeaderComponent={Header}
    ItemSeparatorComponent={Separator}
    keyExtractor={(item: UserAlbum) => item.album.id.toString()}
    data={userAlbums}
    renderItem={({ item }) => (<AlbumListItem userAlbum={item} onPress={onSelect} />)}
  />
)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  }
});
