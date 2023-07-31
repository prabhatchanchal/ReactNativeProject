import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import GridComponent from "./GridComponent";
import Header from "./Header";

// create dummy data of 20 item using for loop
const dummyData = [];
for (let i = 0; i < 20; i++) {
  let rvalue = Math.random() >= 0.5;
  dummyData.push({
    type: "image",
    intent: rvalue ? "story" : "post",
    thumbnailUrl: rvalue
      ? `https://picsum.photos/id/${i + 7}/200/300`
      : `https://picsum.photos/id/${i}/200/200`,
  });
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <GridComponent data={dummyData} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
  },
});

export default App;
