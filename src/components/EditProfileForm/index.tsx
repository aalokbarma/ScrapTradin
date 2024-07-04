import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from '../../constants/Colors';
import Styles from './styles';

const EditProfileForm = ({navigation}: any) => {
  const [name, setName] = useState('ScrapTradin');
  const [contactNumber, setContactNumber] = useState('+91-8820015024');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    Alert.alert('Success!', 'Your profile has edited successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate("Profile"),
          style: 'cancel',
        },
      ]);
  };

  return (
    <ScrollView style = {Styles.scrollView}>
        <View style={Styles.container}>
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
            editable = {false}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={200} style={Styles.inputContainer}>
            <Text style={Styles.label}>Email:</Text>
            <TextInput
            style={Styles.input}
            placeholder="Enter your email"
            placeholderTextColor={Colors.placeholder1}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            />
        </Animatable.View>

        <Animatable.View animation="fadeInUp" delay={300} style={Styles.inputContainer}>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
            <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    </ScrollView>
  );
};

export default EditProfileForm;
