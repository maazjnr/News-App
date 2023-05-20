import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons, EvilIcons } from '@expo/vector-icons';

const SearchHeader = () => {
  return (
    <View style={{flexDirection: "row", paddingHorizontal: 10}}>
      <EvilIcons style={{paddingLeft: 20}} name="search" size={30} color="black" />
    </View>
  )
}

export default SearchHeader;