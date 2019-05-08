// @flow

import React from "react";
import { TouchableOpacity, Image as ImageComponent, StyleSheet } from "react-native";
import type { Image } from "../types";

interface Props {
  imageUrl: string;
  onPress?: () => void;
}

const IMAGE_SIZE = 600;

export default ({ imageUrl, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageComponent source={{ uri: imageUrl }} style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }} />
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
