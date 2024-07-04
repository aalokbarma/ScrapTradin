import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import Header from '../../common/Header';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../constants/Colors';

const MyAddressesScreen = ({navigation}: any) => {

  const [myAddresses, setMyAddresses] = useState<any>([
    {
      id: 1,
      fullAddress: "3 No. Nutan Gram Nitya Nanda Pally",
      landmark: "Balak Sangha Math",
      postOffice: "Morepukur",
      city: "Rishra",
      policeStation: "Rishra",
      district: "Hooghly",
      state: "West Bengal",
      pin: "712250",
    },
  ]);

  const onBackButtonPress = () => {
    navigation.goBack();
  };

  const AddressCard = ({item}: any) => {
    return(
      <TouchableOpacity style = {Styles.addressCard}>
        <Text style = {Styles.contentKey} numberOfLines={3}>
          {item.fullAddress}
        </Text>
        <View style = {Styles.contentRowContainer}>
          <Text style = {Styles.contentKey}>Landmark: </Text>
          <Text style = {Styles.contentValue}>{item.landmark} </Text>
        </View>
        <View style = {Styles.contentRowContainer}>
          <Text style = {Styles.contentKey}>P.O.: </Text>
          <Text style = {Styles.contentValue}>{item.postOffice} </Text>
        </View>
        <View style = {Styles.contentRowContainer}>
          <Text style = {Styles.contentKey}>City: </Text>
          <Text style = {Styles.contentValue}>{item.city} </Text>
          <Text style = {Styles.contentKey}>P.S.: </Text>
          <Text style = {Styles.contentValue}>{item.policeStation} </Text>
        </View>
        <View style = {Styles.contentRowContainer}>
          <Text style = {Styles.contentKey}>District: </Text>
          <Text style = {Styles.contentValue}>{item.district} </Text>
          <Text style = {Styles.contentKey}>State: </Text>
          <Text style = {Styles.contentValue}>{item.state} </Text>
        </View>
        <View style = {Styles.contentRowContainer}>
          <Text style = {Styles.contentKey}>PIN: </Text>
          <Text style = {Styles.contentValue}>{item.pin} </Text>
        </View>
      </TouchableOpacity>
    )
  };

  const RenderNoContent = () => {
    return(
        <View style = {Styles.noContentContainer}>
            <FontAwesome6 name="address-card" size={40} color={Colors.placeholder1} />
            <Text style = {Styles.noContentsText}>No saved addreses available to display.</Text>
        </View>
    )
  }

  return (
    <View style = {Styles.myAddressesScreen}>
      <Header onBackButtonPress = {onBackButtonPress} title = {"My Addresses"} />
      {
        myAddresses.length > 0 ? 
        <FlatList 
          data={myAddresses}
          renderItem={(item: any) => <AddressCard item = {item.item} /> }
          style = {Styles.flatlist}
          contentContainerStyle = {{alignItems: 'center', justifyContent: 'center'}}
        />
        // <AddressCard /> 
        : <RenderNoContent />
      }
    </View>
  )
}

export default MyAddressesScreen;