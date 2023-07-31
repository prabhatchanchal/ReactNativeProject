import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const GridItem = ({ item }) => {
  // Helper function to check if the item is a video
  const isVideo = item.type === "video";
  const [liked, setLiked] = useState(false);
  const [color, setColor] = useState("white");
  const [name, setName] = useState("hearto");

  // Render thumbnail for videos, and Image for photos
  const renderItem = () => {
    if (isVideo) {
      // If it's a video, render the video thumbnail
      return (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: item.thumbnailUrl }} // Replace with the video's thumbnail URL
            style={styles.thumbnail}
            resizeMode={ResizeMode.CONTAIN}
          />
        </View>
      );
    } else {
      // If it's an image, render the image thumbnail
      return (
        <>
          <Image
            source={{ uri: item.thumbnailUrl }}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          />
          <AntDesign
            name={name}
            size={24}
            color={color}
            style={{ position: "absolute", top: "90%", left: "80%" }}
            onPress={() => {
              setColor(liked ? "red" : "white");
              setLiked(!liked);
              setName(liked ? "heart" : "hearto");
            }}
          />
        </>
      );
    }
  };

  return <View style={{ flex: 1, padding: 5 }}>{renderItem()}</View>;
};

export default GridItem;
