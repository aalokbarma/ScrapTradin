import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import paymentImage from '../WelcomeScreenOne/Assets/ConvenientTransaction.png';
import { Image } from 'react-native';

const HomeScreen = ({navigation}: any) => {

  const onSchedulePress = () => {
    navigation.navigate("Schedule");
  };

  return (
    <View style= {Styles.homeScreen}>
      <View style = {Styles.topImageContainer}>
        <Image 
          source={logo}
          style = {Styles.logoImage}
        />
      </View>
      <ImageBackground 
        source={paymentImage}
        style = {Styles.mainContentContainer}
      >
        <Text style = {Styles.headingtext}>Collection by ScrapTradin</Text>
        <Text style = {Styles.majorText}>1,443,515 kg</Text>
        <Text style = {Styles.minorText}>Collected</Text>
      </ImageBackground>
      <View style = {Styles.pickupButtonContainer}>
        <TouchableOpacity style = {Styles.pickupButton} onPress={onSchedulePress}>
          <Text style = {Styles.pickupText}>Schedule a Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;