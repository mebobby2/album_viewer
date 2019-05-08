/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from "enzyme";
import App from '../src/App';

describe("App", () => {
  const wrapper = shallow(<App />);

  it("renders the AlbumListContainer on start up", () => {
    expect(wrapper.find('AlbumListContainer')).toExist();
    expect(wrapper.find('AlbumImageListContainer')).not.toExist();
  });

  it("should navigate to AlbumImageListContainer", () => {
    const albumList = wrapper.find('AlbumListContainer');

    albumList.prop('navigateTo')('image_list', { albumId: 1 });

    expect(wrapper.find('AlbumListContainer')).not.toExist();

    const imageListContainer = wrapper.find('AlbumImageListContainer');
    expect(imageListContainer).toExist();
    expect(imageListContainer.prop('albumId')).toBe(1);
  });
});
