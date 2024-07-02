import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './styles';
import Colors from '../../constants/Colors';

const SetPasswordForm = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Password has been set successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate("Home"),
          style: 'cancel',
        },
      ]);
  };

  return (
    <View style={Styles.container}>
        <View style = {Styles.heading}>
            <Text style = {Styles.headingText}>Set New Password</Text>
        </View>
      <Animatable.View animation="fadeInUp" style={Styles.inputContainer}>
        <Text style={Styles.label}>Password:</Text>
        <View style={Styles.passwordContainer}>
          <TextInput
            style={Styles.input1}
            placeholder="Enter your password"
            placeholderTextColor={Colors.placeholder1}
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Icon
              name={secureTextEntry ? 'eye-off' : 'eye'}
              size={24}
              color="#333"
              style={Styles.icon}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={100} style={Styles.inputContainer}>
        <Text style={Styles.label}>Confirm Password:</Text>
        <View style={Styles.passwordContainer}>
          <TextInput
            style={Styles.input1}
            placeholder="Confirm your password"
            placeholderTextColor={Colors.placeholder1}
            secureTextEntry={secureConfirmTextEntry}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setSecureConfirmTextEntry(!secureConfirmTextEntry)}>
            <Icon
              name={secureConfirmTextEntry ? 'eye-off' : 'eye'}
              size={24}
              color="#333"
              style={Styles.icon}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={200} style={Styles.inputContainer}>
        <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
          <Text style={Styles.buttonText}>Set Password</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SetPasswordForm;
