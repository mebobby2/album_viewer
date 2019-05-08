// @flow
import React, { Component } from "react";
import type { NavigateTo } from "../App";
import type { Album, User, Image, UserAlbum } from "../types";
import { View } from "react-native";
import Photos from "../services/photos";
import AlbumImageList from "../components/AlbumImageList";
import AlbumImage from "../components/AlbumImage";

interface State {
  +photos: Image[];
  selectedPhoto: Image;
}

interface Props {
  albumId: string;
  navigateTo: NavigateTo;
}

export default class AlbumImageListContainer extends Component<Props, State> {
  state: State = {
    photos: null,
    selectedPhoto: null,
  }

  async componentWillMount() {
    const response = await Photos.all(this.props.albumId);
    this.setState({ photos: response.data });
  }

  onSelect = async (image: Image) => {
    this.setState({ selectedPhoto: image });
  };

  onFullImagePress = () => {
    this.setState({ selectedPhoto: null });
  }

  render() {
    const fullImage = this.state.selectedPhoto ?
      <AlbumImage imageUrl={this.state.selectedPhoto.url} onPress={this.onFullImagePress} />
      : null;

    return <View>
      <AlbumImageList images={this.state.photos || []} onSelect={this.onSelect} />
      {fullImage}
    </View>
  }
}
