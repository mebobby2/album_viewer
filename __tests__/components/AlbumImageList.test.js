// @flow
import React from "react";
import { Image } from "react-native";
import { shallow } from "enzyme";
import photos from "../fixtures/filteredPhotos";
import AlbumImageList from "../../src/components/AlbumImageList";

describe("AlbumImageList", () => {
  let wrapper = shallow(<AlbumImageList images={photos} />);

  it("should render the list photos", () => {
    const list = wrapper.find('FlatList');

    expect(list.prop('data')).toEqual(photos);
  });

  it("should render each user album as an Image component", () => {
    const list = wrapper.find('FlatList').dive().dive();

    const items = list.find('CellRenderer');
    expect(items.length).toEqual(2);

    const firstImage = items.at(0).dive().find(Image);
    expect(firstImage).toExist();
    expect(firstImage.prop('source')).toEqual({'uri': photos[0].thumbnailUrl});
  });
})
