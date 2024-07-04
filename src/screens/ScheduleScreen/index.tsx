import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import SchedulePickupForm from '../../components/SchedulePickupForm';

const ScheduleScreen = () => {
  return (
    <View style = {Styles.scheduleScreen}>
      <SchedulePickupForm />
    </View>
  )
}

export default ScheduleScreen;