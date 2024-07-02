import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View style= {Styles.homeScreen}>
      <Text>HomeScreen</Text>
      <AntDesign name="stepforward" size={60} color="blue" />
    </View>
  )
}

export default HomeScreen;