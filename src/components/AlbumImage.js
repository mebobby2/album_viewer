// @flow

import React from "react";
import { TouchableOpacity, Image as ImageComponent, StyleSheet } from "react-native";
import type { Image } from "../types";

interface Props {
  imageUrl: string;
  onPress?: () => void;
  fullSize?: boolean;
}

export default ({ imageUrl, onPress, fullSize }: Props) => {
  const imageSize = fullSize ? 600 : 150;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageComponent source={{ uri: imageUrl }} style={{ width: imageSize, height: imageSize }} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(176,176,176, .5)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
