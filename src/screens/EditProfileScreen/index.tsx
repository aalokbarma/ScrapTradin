import { View, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import logo from '../../assets/ScrapFinding.png';
import SignupForm from '../../components/SignupForm';
import EditProfileForm from '../../components/EditProfileForm';
import Header from '../../common/Header';

const EditProfileScreen = ({navigation}: any) => {

  const onBackButtonPress = () => {
    navigation.goBack();
  }

  return (
    <View style = {Styles.signupScreen}>
      <Header onBackButtonPress = {onBackButtonPress} title = {"Edit Profile"} />
      <EditProfileForm navigation = {navigation} />
    </View>
  )
}

export default EditProfileScreen;