import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header() {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  const handleAddPress = () => {
    navigation.navigate('Add');
  };

  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <View style={{ flex: 0.5, alignItems: 'flex-start' }}>
        <Image
          source={require('../assets/Logo.png')}
          style={{ width: 100, height: 40, resizeMode: 'contain' }}
        />
      </View>
      <View style={{ flex: 0.4, flexDirection: 'row-reverse', paddingRight: 10 }}>
        <TouchableOpacity onPress={handleSearchPress}>
          <Feather name="search" size={24} color="black" style={{ paddingLeft: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddPress}>
          <Feather name="plus-square" size={24} color="black" style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
