import { View, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import ForgetPasswordForm from '../../components/ForgetPassowordForm';

const ForgetPasswordScreen = ({navigation}: any) => {

  const onSignInPress = () => {
    navigation.navigate("Login")
  };

  const onSendOtp = () => {
    navigation.navigate("OTP")
  }

  return (
    <View style = {Styles.otpScreen}>
    <View style = {Styles.topImageContainer}>
      <Image 
        source={logo}
        style = {Styles.logoImage}
      />
    </View>
    <ForgetPasswordForm navigation = {navigation} onSignInPress = {onSignInPress} onSendOtp = {onSendOtp} />
  </View>
  )
}

export default ForgetPasswordScreen;