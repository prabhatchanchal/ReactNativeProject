import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const SearchScreen = () => {
  return (
    <View style = {styles.container}>
        <Octicons name="search" size={24} color="black" />
        <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SearchScreen;