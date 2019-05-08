// @flow
import React, { Component } from "react";
import type { Album, User, Image, UserAlbum } from "../types";
import type { NavigateTo } from "../App";
import { ALBUM_IMAGE_LIST_ROUTE } from "../App";
import Albums from "../services/albums";
import Users from "../services/users";
import AlbumList from "../components/AlbumList";
import _ from "lodash";

interface State {
  +albums: ?Album[];
  +usersMap: ?{ [number]: User };
}
interface Props {
  navigateTo: NavigateTo;
}

const getUserAlbums = (albums, usersMap) => (albums && usersMap) ? albums.map(album => ({ album, user: usersMap[album.userId] })) : [];

export default class AlbumListContainer extends Component<Props, State> {
  state: State = {
    albums: null,
    usersMap: null,
  }

  async componentWillMount() {
    const [albumsResponse, usersResponse] = await Promise.all([Albums.all(), Users.all()]);
    this.setState({
      albums: albumsResponse.data,
      usersMap: _.keyBy(usersResponse.data, 'id'),
    });
  }

  onSelect = (userAlbum: UserAlbum) => {
    this.props.navigateTo(ALBUM_IMAGE_LIST_ROUTE, { 'albumId': userAlbum.album.id })
  };

  render() {
    return <AlbumList userAlbums={getUserAlbums(this.state.albums, this.state.usersMap)} onSelect={this.onSelect} />;
  }
}
