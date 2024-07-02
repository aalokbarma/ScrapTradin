import { View, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import LoginForm from '../../components/LoginForm';

const LoginScreen = ({navigation}: any) => {
  return (
    <View style = {Styles.loginScreen}>
      <View style = {Styles.topImageContainer}>
        <Image 
          source={logo}
          style = {Styles.logoImage}
        />
      </View>
      <LoginForm navigation = {navigation} />
    </View>
  )
}

export default LoginScreen;