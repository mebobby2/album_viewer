// @flow
import React from "react";
import { shallow } from "enzyme";
import AlbumImageListContainer from "../../src/containers/AlbumImageListContainer";
import AlbumImageList from "../../src/components/AlbumImageList";
import AlbumImage from "../../src/components/AlbumImage";
import Photos from "../../src/services/photos";
import filteredPhotos from "../fixtures/filteredPhotos";

describe("AlbumImageListContainer", () => {
  let wrapper;
  let allPhotos;
  const albumdId = 1
  const navigateTo = jest.fn();

  beforeEach(() => {
    allPhotos = jest.fn().mockResolvedValue({ data: filteredPhotos });
    Photos.all = allPhotos;

    wrapper = shallow(<AlbumImageListContainer albumId={albumdId} navigateTo={navigateTo} />);
  });

  it("fetch the images", () => {
    expect(allPhotos).toHaveBeenCalledWith(albumdId);
  });

  it("should render the AlbumImageList component", () => {
    setImmediate(() => {
      const albumImageList = wrapper.find(AlbumImageList);

      expect(albumImageList).toExist();
      expect(albumImageList.prop('images')).toEqual(filteredPhotos);
    });
  });

  it("should navigate back to album_list", () => {
    const albumImageList = wrapper.find(AlbumImageList);

    albumImageList.simulate('back');

    expect(navigateTo).toHaveBeenCalledWith('album_list');
  });

  describe("when a photo is selected", () => {
    const photo = filteredPhotos[0];

    beforeEach(() => {
      setImmediate(() => {
        const albumImageList = wrapper.find(AlbumImageList);
        albumImageList.simulate('select', photo);
      });
    });

    it('should show the fullsize image', () => {
      setImmediate(() => {
        const image = wrapper.find(AlbumImage);
        expect(image).toHaveLength(1);
        expect(image.prop('imageUrl')).toEqual(photo.url);
      });
    });

    it("should close the image when full size image is clicked", () => {
      setImmediate(() => {
        let image = wrapper.find(AlbumImage);

        image.simulate('press');

        image = wrapper.find(AlbumImage);
        expect(image).toHaveLength(0);
      });
    });
  });
});
