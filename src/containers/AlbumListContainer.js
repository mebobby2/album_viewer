// @flow
import React, { useState, useEffect } from "react";
import type { Album, User, Image, UserAlbum } from "../types";
import type { NavigateTo } from "../App";
import { ALBUM_IMAGE_LIST_ROUTE } from "../App";
import Albums from "../services/albums";
import Users from "../services/users";
import AlbumList from "../components/AlbumList";
import _ from "lodash";

interface Props {
  navigateTo: NavigateTo;
}

const getUserAlbums = (albums, usersMap) => (albums && usersMap) ? albums.map(album => ({ album, user: usersMap[album.userId] })) : [];

const onSelect = (navigateTo) => (userAlbum: UserAlbum) => {
  navigateTo(ALBUM_IMAGE_LIST_ROUTE, { 'albumId': userAlbum.album.id })
};

export default AlbumListContainer = ({ navigateTo }: Props) => {
  const [data, setData] = useState({ albums: null, usersMap: null })

  useEffect(() => {
    async function fetchData() {
      const [albumsResponse, usersResponse] = await Promise.all([Albums.all(), Users.all()]);
      setData({ albums: albumsResponse.data, usersMap: _.keyBy(usersResponse.data, 'id') })
    };
    fetchData();
  }, [])

  return <AlbumList userAlbums={getUserAlbums(data.albums, data.usersMap)} onSelect={onSelect(navigateTo)} />;
}
