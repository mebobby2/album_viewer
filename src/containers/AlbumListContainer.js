// @flow
import React, { Component } from "react";
import { Album, User } from "../types";
import Albums from "../services/albums";
import Users from "../services/users";
import AlbumList from "../components/AlbumList";
import _ from "lodash";

interface IState {
  albums: Album[] | null;
  usersMap: { [number]: User } | null;
}

const getUserAlbums = (albums, usersMap) => albums.map(album => ({ album, user: usersMap[album.userId] }));

export default class AlbumListContainer extends Component {
  state: IState = {
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

  render() {
    if (!this.state.albums) return null;
    return <AlbumList userAlbums={getUserAlbums(this.state.albums, this.state.usersMap)} />;
  }
}
