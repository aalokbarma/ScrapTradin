import { View, Text, Image } from 'react-native';
import React from 'react';
import Styles from './styles';
import Colors from '../../constants/Colors';

const PickupComponent = (props: any) => {
    const item = props.item.item;
  return (
    <View style = {Styles.pickupComponentContainer}>
                <View style = {Styles.topContainer}>
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
                        <Text style = {Styles.priceText}>{item.rate}</Text>
                    </View>
                </View>
                <View style = {Styles.contentContainer}>
                    <View style = {Styles.contentRowContainer}>
                        <Text style = {Styles.contentKey}>{ item.pickupStatus == "Pending" ? "Estimated Weight: " : "Total Weight: "} </Text>
                        <Text style = {Styles.contentValue}>{item.weight}</Text>
                    </View>
                    <View style = {Styles.contentRowContainer}>
                        <Text style = {Styles.contentKey}>Pickup on: </Text>
                        <Text style = {Styles.contentValue}>{`${item.pickupDate} at ${item.pickupTime}`}</Text>
                    </View>
                    <View style = {Styles.contentRowContainer}>
                        <Text style = {Styles.contentKey}>Pickup from: </Text>
                        <Text style = {Styles.contentValue}>{item.pickupAddress}</Text>
                    </View>
                    <View style = {Styles.contentRowContainer}>
                        <Text style = {Styles.contentKey}>Pickup status: </Text>
                        <Text style = {[Styles.statusText, item.pickupStatus == "Pending" ? {color: Colors.orange} : {color: Colors.greenButton}]}>{item.pickupStatus}</Text>
                    </View>
                    <View style = {Styles.contentRowContainer}>
                        <Text style = {Styles.contentKey}>Payment value: </Text>
                        <Text style = {Styles.contentValue}>{item.paymentValue}</Text>
                    </View>
                    <View style = {Styles.contentRowContainer}>
                        <Text style = {Styles.contentKey}>Payment status: </Text>
                        <Text style = {[Styles.statusText, item.paymentStatus == "Pending" ? {color: Colors.orange} : {color: Colors.greenButton}]}>{item.paymentStatus}</Text>
                    </View>
                </View>
            </View>
  )
}

export default PickupComponent;