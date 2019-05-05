/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow } from "enzyme";
import App from '../src/App';

it('renders the AlbumListContainer', () => {
  const wrapper = shallow(<App />);

  const albumList = wrapper.find('AlbumListContainer');
  expect(albumList).toExist();
});
