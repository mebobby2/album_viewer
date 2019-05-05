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

export default class AlbumListContainer extends Component {
  state: IState = {
    albums: null,
    usersMap: null,
  }

  async componentWillMount() {
    const albumsResponse = await Albums.all();
    const usersResponse = await Users.all();
    this.setState({
      albums: albumsResponse.data,
      usersMap: _.keyBy(usersResponse.data, 'id'),
    });
  }

  render() {
    if (!this.state.albums) return null;

    const userAlbums = this.state.albums.map(album => ({ album, user: this.state.usersMap[album.userId] }))
    return <AlbumList userAlbums={userAlbums} />;
  }
}
