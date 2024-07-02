import { View, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import OTPInputForm from '../../components/OTPInputForm';

const OTPScreen = ({navigation}: any) => {

  const onSubmit = () => {
    navigation.navigate("SetPassword")
  }

  return (
    <View style = {Styles.otpScreen}>
      <View style = {Styles.topImageContainer}>
        <Image 
          source={logo}
          style = {Styles.logoImage}
        />
      </View>
      <OTPInputForm navigation = {navigation} onSubmit = {onSubmit} />
    </View>
  )
}

export default OTPScreen;