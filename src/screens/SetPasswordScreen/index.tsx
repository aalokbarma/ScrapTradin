import { View, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import SetPasswordForm from '../../components/SetPasswordForm';

const SetPasswordScreen = ({navigation}: any) => {
  return (
    <View style = {Styles.otpScreen}>
      <View style = {Styles.topImageContainer}>
        <Image 
          source={logo}
          style = {Styles.logoImage}
        />
      </View>
      <SetPasswordForm navigation = {navigation}/>
    </View>
  )
}

export default SetPasswordScreen;