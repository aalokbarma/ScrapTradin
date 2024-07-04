import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import copper from './Assets/copper.jpeg';
import iron from './Assets/Iron.jpg';
import PickupComponent from '../../common/PickupComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';

const CompletedPickupScreen = () => {
  const [completedPickups, setCompletedPickups] = useState<any>([
      {
          id: 1,
          image: copper,
          title: "Copper",
          rate: "₹ 1,200/kg",
          weight: "45 kg",
          pickupDate: "19-06-2024",
          pickupTime: "2:00 PM",
          pickupAddress: "Nutan Gram, Morepukur, Rishra",
          pickupStatus: "Success",
          paymentStatus: "Success",
          paymentValue: "₹ 54,000/-"
        },
      {
          id: 2,
          image: iron,
          title: "Iron",
          rate: "₹ 80/kg",
          weight: "450 kg",
          pickupDate: "28-06-2024",
          pickupTime: "06:00 PM",
          pickupAddress: "Nutan Gram, Morepukur, Rishra",
          pickupStatus: "Success",
          paymentStatus: "Success",
          paymentValue: "₹ 36,000/-"
        },
  ]);

  const renderNoPickupComponent = () => {
    return(
        <View style = {Styles.noContentContainer}>
            <MaterialCommunityIcons name="dump-truck" size={60} color={Colors.placeholder1} />
            <Text style = {Styles.noContentsText}>No completed pickups available to display.</Text>
        </View>
    )
  }

  return (
    <View style = {Styles.upcomingPickupScreen}>
        {
            completedPickups.length == 0 ? renderNoPickupComponent() : 
            <>
            <FlatList 
                data={completedPickups}
                renderItem={(item)=> <PickupComponent item = {item} />}
                style = {Styles.flatlist}
                contentContainerStyle = {{alignItems: 'center'}}
            />
            </>
        }
    </View>
  )
}

export default CompletedPickupScreen;