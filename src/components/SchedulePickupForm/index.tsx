import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Styles from './styles';
import * as Animatable from 'react-native-animatable';
import Colors from '../../constants/Colors';

const SchedulePickupForm = () => {
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [address, setAddress] = useState('');

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log('Estimated Weight:', weight);
    console.log('Selected Date:', date.toLocaleDateString());
    console.log('Selected Time:', time.toLocaleTimeString());
    console.log('Pickup Address:', address);
  };

  return (
    <View style={Styles.container}>
        <View style = {Styles.heading}>
            <Text style = {Styles.headingText}>Schedule Pickup</Text>
          </View>
        <Animatable.View animation="fadeInUp" delay={100} style={Styles.inputContainer}>
            <Text style={Styles.label}>Estimated Weight (in kg):</Text>
            <TextInput
                style={Styles.input}
                keyboardType="numeric"
                placeholder="Enter weight"
                placeholderTextColor={Colors.placeholder1}
                value={weight}
                onChangeText={setWeight}
            />
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={200} style={Styles.inputContainer}>
            <Text style={Styles.label}>Select Date:</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={Styles.datePickerButton}>
                <Text style={Styles.datePickerText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
                style = {Styles.datePicker}
                />
            )}
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={300} style={Styles.inputContainer}>
            <Text style={Styles.label}>Select Time:</Text>
            <TouchableOpacity onPress={() => setShowTimePicker(true)} style={Styles.datePickerButton}>
                <Text style={Styles.datePickerText}>{time.toLocaleTimeString()}</Text>
            </TouchableOpacity>
            {showTimePicker && (
                <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={handleTimeChange}
                />
            )}
        </Animatable.View>
        <Animatable.View animation="fadeInUp" delay={400} style={Styles.inputContainer}>
            <Text style={Styles.label}>Pickup Address:</Text>
            <TextInput
                style={Styles.input}
                placeholder="Enter address"
                value={address}
                placeholderTextColor={Colors.placeholder1}
                onChangeText={setAddress}
            />
        </Animatable.View>




        <Animatable.View animation="fadeInUp" delay={500} style={Styles.inputContainer}>
            <TouchableOpacity style={Styles.button} onPress={handleSubmit}>
            <Text style={Styles.buttonText}>Confirm Pickup</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  );
};

export default SchedulePickupForm;
