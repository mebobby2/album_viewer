// @flow
import { shallow } from "enzyme";
import React from "react";
import type { Image } from "../../src/types";
import filteredPhotos from "../fixtures/filteredPhotos";
import AlbumImage from "../../src/components/AlbumImage";

describe("AlbumImage", () => {
  const albumImage = filteredPhotos[0];
  const onPress = jest.fn();
  let wrapper = shallow(<AlbumImage imageUrl={albumImage.thumbnailUrl} onPress={onPress} />);

  it("should render the thumbnail image", () => {
    const image = wrapper.find('Image');
    expect(image.prop('source').uri).toEqual(albumImage.thumbnailUrl);
  });

  it("should notify when clicked", () => {
    wrapper.simulate('press');

    expect(onPress).toHaveBeenCalled();
  })
});
