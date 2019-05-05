// @flow
import React, { Component } from "react";
import type { Album, User } from "../types";
import Albums from "../services/albums";
import Users from "../services/users";
import Photos from "../services/photos";
import AlbumList from "../components/AlbumList";
import _ from "lodash";

interface State {
  +albums: ?Album[];
  +usersMap: ?{ [number]: User };
}

const getUserAlbums = (albums, usersMap) => albums.map(album => ({ album, user: usersMap[album.userId] }));

export default class AlbumListContainer extends Component<{}, State> {
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

  onSelect = (userAlbum) => {
    Photos.all(userAlbum.album.id);
  };

  render() {
    if (!this.state.albums || !this.state.usersMap) return null;
    return <AlbumList userAlbums={getUserAlbums(this.state.albums, this.state.usersMap)} onSelect={this.onSelect} />;
  }
}
