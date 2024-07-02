import { View, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import SignupForm from '../../components/SignupForm';

const SignupScreen = ({navigation}: any) => {
  return (
    <View style = {Styles.signupScreen}>
      <View style = {Styles.topImageContainer}>
        <Image 
          source={logo}
          style = {Styles.logoImage}
        />
      </View>
      <SignupForm navigation = {navigation} />
    </View>
  )
}

export default SignupScreen;