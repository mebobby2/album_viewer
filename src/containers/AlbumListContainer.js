// @flow
import React, { Component } from "react";
import type { Album, User, UserAlbum } from "../types";
import Albums from "../services/albums";
import Users from "../services/users";
import { View } from "react-native";
import Photos from "../services/photos";
import AlbumList from "../components/AlbumList";
import _ from "lodash";
import AlbumImage from "../components/AlbumImage";

interface State {
  +albums: ?Album[];
  +usersMap: ?{ [number]: User };
  +albumImage: ?UserAlbum;
  showThumbnail: boolean;
  showFullImage: boolean;
}

const getUserAlbums = (albums, usersMap) => albums.map(album => ({ album, user: usersMap[album.userId] }));

export default class AlbumListContainer extends Component<{}, State> {
  state: State = {
    albums: null,
    usersMap: null,
    albumImage: null,
    showThumbnail: false,
    showFullImage: false,
  }

  async componentWillMount() {
    const [albumsResponse, usersResponse] = await Promise.all([Albums.all(), Users.all()]);
    this.setState({
      albums: albumsResponse.data,
      usersMap: _.keyBy(usersResponse.data, 'id'),
    });
  }

  onSelect = async (userAlbum) => {
    const response = await Photos.all(userAlbum.album.id);
    this.setState({ albumImage: response.data[0], showThumbnail: true });
  };

  onThumbnailPress = () => {
    this.setState({ showThumbnail: false, showFullImage: true });
  }

  onFullImagePress = () => {
    this.setState({ showFullImage: false });
  }

  render() {
    if (!this.state.albums || !this.state.usersMap) return null;

    const thumbnail = this.state.showThumbnail ?
      <AlbumImage imageUrl={this.state.albumImage.thumbnailUrl} onPress={this.onThumbnailPress} />
      : null;
    const fullImage = this.state.showFullImage ?
      <AlbumImage imageUrl={this.state.albumImage.url} onPress={this.onFullImagePress} fullSize />
      : null;

    return <View>
      <AlbumList userAlbums={getUserAlbums(this.state.albums, this.state.usersMap)} onSelect={this.onSelect} />
      {thumbnail}
      {fullImage}
    </View>
  }
}
