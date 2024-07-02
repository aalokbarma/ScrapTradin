import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../../constants/Colors';
import Styles from './styles';
import CheckBox from '@react-native-community/checkbox';

const SignupForm = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [radioButtons, setRadioButtons] = useState([
    { id: '1', label: 'Industry', value: 'Industry', selected: true },
    { id: '2', label: 'Household', value: 'Household' }
  ]);
  const [selectedRadioOption, setSelectedRadioOption] = useState<null|string>(null);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const handleSubmit = () => {
    navigation.navigate("OTP")
  };

  const onRadioButtonSelect = (value: string) => {
    setSelectedRadioOption(value)
  };

  const onSignInPress = () => {
    navigation.navigate("Login")
  }

  const onPrivacyPolicyPress = () => {
    navigation.navigate("Privacy");
  };

  const onTermsConditionPress = () => {
    navigation.navigate("Terms");
  }

  const RadioButton = ({ options, selectedOption, onSelect }: any) => {
    return (
      <View style={Styles.radioButtonContainer}>
        {options.map((option: any) => (
          <TouchableOpacity
            key={option.label}
            style={Styles.radioContainer}
            onPress={() => onSelect(option.value)}
          >
            <View style={[Styles.radioCircle, selectedOption === option.value && Styles.selectedRadioCircle]} />
            <Text style={Styles.radioText}>{option.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style = {Styles.scrollView}>
        <View style={Styles.container}>
          <View style = {Styles.heading}>
            <Text style = {Styles.headingText}>Sign Up</Text>
          </View>
        <Animatable.View animation="fadeInUp" style={Styles.inputContainer}>
            <Text style={Styles.label}>Name:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your name"
            placeholderTextColor={Colors.placeholder1}
            value={name}
            onChangeText={setName}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={100} style={Styles.inputContainer}>
            <Text style={Styles.label}>Phone Number:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor={Colors.placeholder1}
            keyboardType="phone-pad"
            value={contactNumber}
            onChangeText={setContactNumber}
            />
        </Animatable.View>

        {/* <Animatable.View animation="fadeInUp" delay={200} style={Styles.inputContainer}>
            <Text style={Styles.label}>Email:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your email"
            placeholderTextColor={Colors.placeholder1}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            />
        </Animatable.View> */}

        <Animatable.View animation="fadeInUp" delay={300} style={Styles.inputContainer}>
            <Text style={Styles.label}>Pincode:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your pincode"
            placeholderTextColor={Colors.placeholder1}
            keyboardType="number-pad"
            maxLength={6}
            value={pincode}
            onChangeText={setPincode}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={400} style={Styles.inputContainer}>
            <Text style={Styles.label}>Type:</Text>
            <RadioButton 
                options = {radioButtons}
                selectedOption = {selectedRadioOption}
                onSelect = {onRadioButtonSelect}
            />
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={400} style={Styles.checkboxContainer}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                tintColors={{ true: Colors.buttonPrimary, false: Colors.Color3 }}
                style = {Styles.checkbox}
            />
            <Text style = {Styles.minorText}>By checking, you agree to our </Text>
            <TouchableOpacity onPress={() => onPrivacyPolicyPress()}>
                <Text style = {Styles.majorText}> Privacy Policy </Text>
            </TouchableOpacity>
            <Text style = {Styles.minorText}> and </Text>
            <TouchableOpacity onPress={() => onTermsConditionPress()}>
                <Text style = {Styles.majorText}> Terms & Conditions </Text>
            </TouchableOpacity>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={500} style={Styles.inputContainer}>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
            <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
        <Animatable.View animation="fadeInUp" delay={600} style={Styles.bottomContainer}>
            <View style = {Styles.signInContainer}>
                <Text style = {Styles.alreadyText}>Already a user? </Text>
                <TouchableOpacity onPress={()=> onSignInPress()}>
                    <Text style = {Styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
    </ScrollView>
  );
};

export default SignupForm;
