import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import Header from '../../common/Header';

const AboutUsScreen = ({navigation}: any) => {

  const onBackButtonPress = () => {
    navigation.goBack();
  }

  return (
    <View style = {Styles.privacyPolicyScreen}>
      <Header onBackButtonPress = {onBackButtonPress} title = {"About Us"} />
      <ScrollView style = {Styles.contentContainer}>
        <Text style = {Styles.titleText}>Welcome to ScrapTradin!</Text>
        <Text style = {Styles.minorText}>ScrapTradin is your trusted partner in the scrap trading industry. Our mission is to provide an efficient, transparent, and user-friendly platform for buyers and sellers of scrap materials. We are committed to sustainability and helping our users maximize the value of their scrap materials.</Text>
        <Text style = {Styles.majorText}>Our Mission</Text>
        <Text style = {Styles.minorText}>Our mission is to revolutionize the scrap trading industry by leveraging technology to create a seamless and efficient marketplace. We aim to:</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>a) Simplify the Trading Process:</Text> Make it easy for users to buy and sell scrap materials through our intuitive app.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>b) Promote Sustainability:</Text> Encourage the recycling and repurposing of materials to reduce waste and environmental impact.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>c) Ensure Transparency:</Text> Provide clear and accurate information to help users make informed trading decisions.</Text>
        <Text style = {Styles.majorText}>Our Vision</Text>
        <Text style = {Styles.minorText}>Our vision is to become the leading platform for scrap trading, fostering a community of responsible and informed traders who contribute to a sustainable future.</Text>
        <Text style = {Styles.majorText}>Our Values</Text>
        <Text style = {Styles.minorText}>At ScrapTradin, we are guided by a set of core values:</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>a) Integrity:</Text> We uphold the highest standards of honesty and integrity in all our actions.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>b) Innovation:</Text> We continually seek innovative solutions to improve the trading experience for our users.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>c) Customer Focus:</Text> We are dedicated to meeting the needs of our users and providing exceptional customer service.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>d) Sustainability:</Text> We are committed to promoting environmentally responsible practices.</Text>
        <Text style = {Styles.majorText}>Our Team</Text>
        <Text style = {Styles.minorText}>Our team is composed of experienced professionals from the recycling and technology industries. We are passionate about making a positive impact on the environment and helping our users succeed in their scrap trading endeavors.</Text>
        <Text style = {Styles.majorText}>Contact Us</Text>
        <Text style = {Styles.minorText}>If you have any questions or would like to learn more about our app, please feel free to contact us:</Text>
        <Text style = {Styles.contactsTexts}>ScrapTradin</Text>
        <Text style = {Styles.contactsTexts}>786 Nutan Gram, Morepukur, Rishra, Hooghly, WB, IN</Text>
        <Text style = {Styles.contactsTexts}>Monuburman8820@gmail.com</Text>
        <Text style = {Styles.contactsTexts}>+91-8820015024</Text>
        <View style = {Styles.endElement} />
      </ScrollView>
    </View>
  )
}

export default AboutUsScreen;