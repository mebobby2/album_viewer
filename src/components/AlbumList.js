// @flow

import React from "react";
import { FlatList } from "react-native";
import { AlbumListItem } from "./AlbumListItem";
import type { UserAlbum } from "../types";

interface Props {
  userAlbums: UserAlbum[];
}

export default ({ userAlbums }: Props) => (
  <FlatList data={userAlbums} renderItem={({ item }) => (<AlbumListItem userAlbum={item} />)} />
)
