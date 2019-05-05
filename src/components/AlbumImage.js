// @flow

import React from "react";
import { TouchableOpacity, Image as ImageComponent, StyleSheet } from "react-native";
import type { Image } from "../types";

interface Props {
  imageUrl: string;
  onPress?: () => void;
}

export default ({ imageUrl, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <ImageComponent source={{uri: imageUrl}} />
  </TouchableOpacity>
)
