import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from './styles';
import Colors from '../../constants/Colors';

const OTPInputForm = ({navigation, onSubmit}: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text: any, index: any) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if the current input is filled
    if (text && index < 3) {
        // @ts-ignore
      inputs.current[index + 1].focus();
    }
  };

  const onResendPress = () => {
    Alert.alert('OTP Sent', `OTP Sent Successfully!`);
  };

  const handleSubmit = () => {
    Alert.alert('OTP Submitted', `Entered OTP: ${otp.join('')}`);
  };

  

  return (
    <View style={Styles.container}>
      <Animatable.View animation="fadeInUp" style={Styles.inputContainer}>
        <Text style={Styles.label}>Enter OTP:</Text>
        <View style={Styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              // @ts-ignore
              ref={(input) => (inputs.current[index] = input)}
              style={Styles.otpInput}
              keyboardType="numeric"
              placeholderTextColor={Colors.placeholder1}
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={200} style={Styles.resendContainer}>
        <View style = {Styles.resendTextContainer}>
            <Text style = {Styles.minorText}>Didn't received code? </Text>
            <TouchableOpacity onPress={() => onResendPress()}>
                <Text style = {Styles.majorText}>Resend in 00:00</Text>
            </TouchableOpacity>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={200} style={Styles.inputContainer}>
        <TouchableOpacity style={Styles.button} onPress={onSubmit}>
          <Text style={Styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default OTPInputForm;
