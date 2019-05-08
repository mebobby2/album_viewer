// @flow
import React, { Component } from "react";
import type { Album, User, Image, UserAlbum } from "../types";
import type { NavigateTo } from "../App";
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

const getUserAlbums = (albums, usersMap) => albums ? albums.map(album => ({ album, user: usersMap[album.userId] })) : [];

export default class AlbumImageListContainer extends Component<Props, State> {
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
    this.props.navigateTo('image_list', { albumId: userAlbum.album.id })
  };

  render() {
    return <AlbumList userAlbums={getUserAlbums(this.state.albums, this.state.usersMap)} onSelect={this.onSelect} />;
  }
}
