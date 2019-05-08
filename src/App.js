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

const getCurrentView = (route, routeParams, navigateTo) => {
  let Container;
  switch (route) {
    case ALBUM_IMAGE_LIST_ROUTE:
      Container = AlbumImageListContainer;
      break;
    default:
      Container = AlbumListContainer;
  }
  return <Container {...routeParams} navigateTo={navigateTo} />;
}

export default class App extends Component<Props, State> {
  state: State = {
    route: ALBUM_LIST_ROUTE,
    routeParams: {},
  }

  navigateTo: NavigateTo = (route, routeParams) => {
    this.setState({ route, routeParams });
  }

  render() {
    return (
      <View style={styles.container}>
        {getCurrentView(this.state.route, this.state.routeParams, this.navigateTo)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 60,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
