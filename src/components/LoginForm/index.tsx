import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from './styles';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginForm = ({navigation}: any) => {
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleSubmit = () => {
    Alert.alert('Login Submitted', `Contact Number: ${contactNumber}\nPassword: ${password}`);
  };

  const onSignUpPress = () => {
    navigation.navigate("Signup")
  };

  const onForgetPasswordPress = () => {
    navigation.navigate("ForgetPassoword")
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <ScrollView style = {Styles.scrollView}>
        <View style={Styles.container}>
            <View style = {Styles.heading}>
                <Text style = {Styles.headingText}>Sign In</Text>
            </View>
        <Animatable.View animation="fadeInUp" style={Styles.inputContainer}>
            <Text style={Styles.label}>Phone Number:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your contact number"
            placeholderTextColor={Colors.placeholder1}
            keyboardType="phone-pad"
            value={contactNumber}
            onChangeText={setContactNumber}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={100} style={Styles.inputContainer}>
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
            {/* <TextInput
            style={Styles.input}
            placeholder="Enter your password"
            placeholderTextColor={Colors.placeholder1}
            secureTextEntry={securePassword}
            value={password}
            onChangeText={setPassword}
            /> */}
            <View style = {Styles.forgetButtonContainer}>
                <TouchableOpacity onPress={() => onForgetPasswordPress()}>
                    <Text style = {Styles.forgetPasswordText}>forgot password ?</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={200} style={Styles.signUpButtonContainer}>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
            <Text style={Styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
        <Animatable.View animation="fadeInUp" delay={600} style={Styles.bottomContainer}>
            <View style = {Styles.signUpContainer}>
                <Text style = {Styles.notAUserText}>Not registered ? </Text>
                <TouchableOpacity onPress={()=> onSignUpPress()}>
                    <Text style = {Styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </ScrollView>
  );
};

export default LoginForm;
