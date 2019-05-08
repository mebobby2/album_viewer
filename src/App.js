/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AlbumListContainer from './containers/AlbumListContainer';
import AlbumImageListContainer from './containers/AlbumImageListContainer';

type NavigationParams = { name: string, value: string };
export type NavigateTo = (route: string, params: ?NavigationParams) => void;

type Props = {};
type State = {
  route: string;
  routeParams: NavigationParams;
}

export const ALBUM_LIST_ROUTE = 'album_list';
export const ALBUM_IMAGE_LIST_ROUTE = 'image_list';

export default class App extends Component<Props, State> {
  state: State = {
    route: ALBUM_LIST_ROUTE,
    routeParams: {},
  }

  navigateTo: NavigateTo = (route, routeParams) => {
    this.setState({ route, routeParams });
  }

  render() {
    const albumList = this.state.route === ALBUM_LIST_ROUTE ? <AlbumListContainer {...this.state.routeParams} navigateTo={this.navigateTo} /> : null;
    const imageList = this.state.route === ALBUM_IMAGE_LIST_ROUTE ? <AlbumImageListContainer {...this.state.routeParams} navigateTo={this.navigateTo} /> : null;
    return (
      <View style={styles.container}>
        {albumList}
        {imageList}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
