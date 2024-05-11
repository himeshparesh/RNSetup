import React from 'react';
import {ImageRequireSource} from 'react-native';
import ImageView from 'react-native-image-viewing';

const ImageZoomModal = ({
  visible,
  images,
  onRequestClose,
}: {
  visible: boolean;
  images: ImageRequireSource[];
  onRequestClose: () => void;
}) => {
  return (
    <ImageView
      images={images}
      imageIndex={1}
      visible={visible}
      onRequestClose={onRequestClose}
    />
  );
};

export default ImageZoomModal;
