import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import React from 'react';
import Styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../constants/Colors';

const ProfileScreen = ({navigation}: any) => {
  
  const navigatorOptions = [
    {
      id: 1,
      title: "Saved Addresses",
      onItemPress: () => navigation.navigate("MyAddresses"),
      icon: () => <FontAwesome6 name="address-card" size={30} color={Colors.buttonPrimary} />
    },
    {
      id: 2,
      title: "Edit Profile",
      onItemPress: () => navigation.navigate("EditProfile"),
      icon: () => <FontAwesome5 name="user-edit" size={26} color={Colors.buttonPrimary} />
    },
    {
      id: 3,
      title: "About Us",
      onItemPress: () => navigation.navigate("AboutUs"),
      icon: () => <AntDesign name="infocirlceo" size={30} color={Colors.buttonPrimary} />
    },
    {
      id: 4,
      title: "Log Out",
      onItemPress: () => Alert.alert("You're logged out!"),
      icon: () => <MaterialCommunityIcons name="logout" size={30} color={Colors.redButton} />
    },
  ]

  const NavigatorComponent = ({item}: any) => {
    console.warn(item)
    return(
      <TouchableOpacity style = {Styles.navigatorComponentsContainer} onPress={item.onItemPress}>
        <View style = {Styles.leftContainer}>
          {item.icon()}
          <Text style = {[Styles.titleText, item.title == "Log Out" ? {color: Colors.redButton}: {color: Colors.minorText}]}>{item.title}</Text>
        </View>
        {
          item.title != "Log Out" &&
          <Entypo name="chevron-right" size={25} color={Colors.buttonPrimary} />
        }
      </TouchableOpacity>
    )
  }

  return (
    <View style = {Styles.profileScreen}>
      <View style = {Styles.header}>
        <Text style = {Styles.nameText}>ScrapTradin</Text>
        <Text style = {Styles.phoneNumberText}>+91-8820015024</Text>
      </View>
      <View style = {Styles.contentContainer}>
        <FlatList 
          data = {navigatorOptions}
          renderItem={({item}: any) => <NavigatorComponent item = {item} />}
          style = {Styles.flatlist}
          ItemSeparatorComponent={() => <View style = {Styles.separatorComponent} />}
        />
      </View>
    </View>
  )
}

export default ProfileScreen;