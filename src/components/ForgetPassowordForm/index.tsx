import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from './styles';
import Colors from '../../constants/Colors';

const ForgotPasswordForm = ({navigation, onSignInPress, onSendOtp}: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }
    Alert.alert('Success', 'Password has been set successfully', [
        {
          text: 'OK',
          onPress: () => onSendOtp(),
          style: 'cancel',
        },
      ]);
  };

  return (
    <ScrollView style = {Styles.scrollView}>
        <View style={Styles.container}>
            <View style = {Styles.heading}>
                <Text style = {Styles.headingText}>Forget Password ?</Text>
            </View>
        <Animatable.View animation="fadeInUp" style={Styles.inputContainer}>
            <Text style={Styles.label}>Phone Number:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor={Colors.placeholder1}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={100} style={Styles.inputContainer}>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
            <Text style={Styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
        <Animatable.View animation="fadeInUp" delay={200} style={Styles.bottomContainer}>
            <View style = {Styles.signUpContainer}>
                <Text style = {Styles.notAUserText}>Remember Password ? </Text>
                <TouchableOpacity onPress={()=> onSignInPress()}>
                    <Text style = {Styles.signUpText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </ScrollView>
  );
};

export default ForgotPasswordForm;
