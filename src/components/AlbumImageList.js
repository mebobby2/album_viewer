// @flow

import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image as ImageComponent, Button } from "react-native";
import type { Image } from "../types";

interface Props {
  images: Image[];
  onSelect: (album: Image) => any;
  onBack: () => any;
}

const headerComponent = (onBack) =>
  () => (<View style={styles.header}><Button title='Back' onPress={onBack}></Button><Text>Photos</Text></View>);

export default ({ images, onSelect, onBack }: Props) => (
  <FlatList
    ListHeaderComponent={headerComponent(onBack)}
    keyExtractor={(item: Image) => item.id.toString()}
    data={images}
    renderItem={({ item }) => (<TouchableOpacity onPress={() => onSelect(item)} style={styles.item}>
      <ImageComponent source={{ uri: item.thumbnailUrl }} style={styles.image} />
    </TouchableOpacity>)}
  />
)

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around",
    backgroundColor: 'gray',
    padding: 10,
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
  },
});
