import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './styles';
import Colors from '../../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = ({onBackButtonPress, title}: any) => {

  return (
    <View style = {Styles.header}>
        <View style = {Styles.headerLeftContainer}>
          <TouchableOpacity style = {Styles.backButton} onPress={()=> onBackButtonPress()}>
            <FontAwesome5 name="arrow-left" size={30} color={Colors.buttonPrimary} />
          </TouchableOpacity>
        </View>
        <View style = {Styles.headerHeadingContainer}>
          <Text style = {Styles.headingText}>{title}</Text>
        </View>
      </View>
  )
}

export default Header;