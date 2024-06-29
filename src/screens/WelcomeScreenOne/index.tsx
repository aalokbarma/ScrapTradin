import { View, Text, Image, Button } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';

const WelcomeScreenOne = ({navigation}: any) => {
  return (
    <View style={Styles.container}>
      <Image source={logo} style={Styles.logo} />
      <Text style={Styles.title}>Welcome to ScrapTrade</Text>
      <Text style={Styles.subtitle}>Trade your scrap easily and profitably</Text>
      <View style={Styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  )
}

export default WelcomeScreenOne;