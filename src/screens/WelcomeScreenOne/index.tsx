import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from './Assets/ConvenientTransaction.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreenOne = ({navigation}: any) => {
  const bars = [
    {
      id:1,
      activityStatus: "active"
    },
    {
      id:2,
      activityStatus: "pending"
    },
    {
      id:3,
      activityStatus: "pending"
    },
    {
      id:4,
      activityStatus: "pending"
    },
    {
      id:5,
      activityStatus: "pending"
    },
    {
      id:6,
      activityStatus: "pending"
    },
  ];

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('welcomeStatus', value);
    } catch (e) {
      console.log(e)
    }
  };

  const onNextPress = () => {
    navigation.navigate("WelcomeTwo")
  };

  const onSkipPress = () => {
    storeData('skipped')
    navigation.navigate("Home")
  };

  return (
    <View style={Styles.container}>
      <View style = {Styles.skipButtonContainer}>
        <TouchableOpacity style = {Styles.skipButton} onPress={() => onSkipPress()}>
          <Text style = {Styles.skipButtonText}>SKIP</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.content}>
        <Image source={logo} style={Styles.image} />
        <Text style={Styles.title}>Convenient Transactions</Text>
        <Text style={Styles.subtitle}>
        Easily buy and sell scrap materials from your phone.
        </Text>
      </View>
      <View style = {Styles.bottomBarsContainer}>
        <View style = {Styles.barsContainer}>
          {
            bars.map((item: {id: number, activityStatus: string}) => (
              <View style = {item.activityStatus == "completed" ? Styles.completedBar 
                : item.activityStatus == "active" ? Styles.activeBar
                : Styles.bar
              } />
            ))
          }
        </View>
        <View style = {Styles.nextButtonContainer}>
          <TouchableOpacity style = {Styles.nextButton} onPress={() => onNextPress()}>
            <Text style = {Styles.nextButtonText}>Next</Text>
            <AntDesign name="right" size={18} color={Colors.background} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreenOne;