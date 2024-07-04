import { View, Text, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import copper from './Assets/copper.jpeg';
import iron from './Assets/Iron.jpg';
import PickupComponent from '../../common/PickupComponent';

const UpcomingPickupScreen = () => {
    const [upcomingPickups, setUpcomingPickups] = useState<any>([
        // {
        //     id: 1,
        //     image: copper,
        //     title: "Copper",
        //     rate: "₹ 1,200/kg",
        //     weight: "45 kg",
        //     pickupDate: "19-06-2024",
        //     pickupTime: "2:00 PM",
        //     pickupAddress: "Nutan Gram, Morepukur, Rishra",
        //     pickupStatus: "Pending",
        //     paymentStatus: "Pending",
        //   },
    ]);

    const renderNoPickupComponent = () => {
        return(
            <View style = {Styles.noContentContainer}>
                <MaterialCommunityIcons name="dump-truck" size={60} color={Colors.placeholder1} />
                <Text style = {Styles.noContentsText}>No upcoming pickups available to display.</Text>
            </View>
        )
    }

  return (
    <View style = {Styles.upcomingPickupScreen}>
        {
            upcomingPickups.length == 0 ? renderNoPickupComponent() : 
            <>
            <FlatList 
                data={upcomingPickups}
                renderItem={(item)=> <PickupComponent item = {item} />}
                style = {Styles.flatlist}
                contentContainerStyle = {{alignItems: 'center'}}
            />
            </>
        }
    </View>
  )
}

export default UpcomingPickupScreen;