// @flow

import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image as ImageComponent } from "react-native";
import type { Image } from "../types";

interface Props {
  images: Image[];
  onSelect: (album: Image) => any;
}

const Header = () => (<View style={styles.header}><Text>Photos</Text></View>);

export default ({ images, onSelect }: Props) => (
  <FlatList
    ListHeaderComponent={Header}
    keyExtractor={(item: Image) => item.id.toString()}
    data={images}
    renderItem={({ item }) => (<TouchableOpacity onPress={() => onSelect(item) } style={styles.item}>
      <ImageComponent source={{ uri: item.thumbnailUrl }} style={styles.image} />
    </TouchableOpacity>)}
  />
)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#CED0CE",
  },
  item: {
    alignItems: "center"
  },
  image: {
    width: 150,
    height: 150,
  }
});
