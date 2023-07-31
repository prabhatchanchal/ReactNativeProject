import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import GridItem from "./GridItem";

const GridComponent = ({ data }) => {
  const renderItem = ({ item }) => <GridItem item={item} />;

  return (
    <View style={styles.gridContainer}>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    padding: 8,
  },
});

export default GridComponent;
