import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import copper from './Assets/copper.jpeg';
import iron from './Assets/Iron.jpg';
import Colors from '../../constants/Colors';

const RatesCard = ({item, onItemPress, selectedId}: any) => {
  return(
    <TouchableOpacity style = {[Styles.cardMainContainer, selectedId == item.id ? {backgroundColor: Colors.Color4} : {}]} onPress={() => onItemPress(item.id)}>
      <View style = {Styles.cardLeftContainer}>
        <Image 
          source={item.image}
          style = {Styles.contentImage}
        />
        <View style = {Styles.cardContentContainer}>
          <Text style = {Styles.cardTitleText}>{item.title}</Text>
        </View>
      </View>
      <View style = {Styles.cardRightContainer}>
        <Text style = {Styles.priceText}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const RatesScreen = () => {

  const [selectedId, setSelectedId] = useState()

  const contentsData = [
    {
      id: 1,
      image: copper,
      title: "Copper",
      price: "₹ 1,200/kg"
    },
    {
      id: 2,
      image: iron,
      title: "Iron",
      price: "₹ 80/kg"
    }
  ];

  const onItemPress = (id: any) => {
    setSelectedId(id);
  }

  return (
    <View style = {Styles.ratesScreen}>
      <View style = {Styles.topContainer}>
        <Text style = {Styles.ratesText}>Rates</Text>
      </View>
      <ScrollView style = {Styles.contentContainer}>
        {contentsData.map((item) => (
          <RatesCard item = {item} onItemPress = {onItemPress} selectedId = {selectedId} />
        ))}
      </ScrollView>
    </View>
  )
}

export default RatesScreen;