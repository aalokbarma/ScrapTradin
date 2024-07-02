import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import Header from '../../common/Header';

const PrivacyPolicyScreen = ({navigation}: any) => {

  const onBackButtonPress = () => {
    navigation.goBack();
  }

  return (
    <View style = {Styles.privacyPolicyScreen}>
      <Header onBackButtonPress = {onBackButtonPress} title = {"Privacy Policy"} />
      <ScrollView style = {Styles.contentContainer}>
        <Text style = {Styles.titleText}>Effective Date: <Text style = {Styles.minorText}>1st July 2024</Text></Text>
        <Text style = {Styles.majorText}>1. Introduction</Text>
        <Text style = {Styles.minorText}>Welcome to ScrapTradin. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our mobile application and tell you about your privacy rights and how the law protects you.</Text>
        <Text style = {Styles.majorText}>2. Information We Collect</Text>
        <Text style = {Styles.minorText}>We may collect and process the following data about you:</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>a) Personal Identification Information:</Text> Name, Phone number, Email address, and Pincode.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>b) Transaction Information:</Text> Details about transactions you carry out through our app.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>c) Technical Data:</Text> IP address, login data, browser type and version, time zone setting, and location.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>d) Usage Data:</Text> Information about how you use our app.</Text>
        <Text style = {Styles.majorText}>3. How We Use Your Information</Text>
        <Text style = {Styles.minorText}>We use the information we collect in the following ways:</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>a) To Provide and Improve Our Service:</Text>To deliver the services you request, enhance the user experience, and troubleshoot issues.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>b) To Communicate with You:</Text> To send notifications about your account, respond to your inquiries, and inform you about updates or changes to our services.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>c) For Marketing Purposes:</Text> To send promotional materials and offers (with your consent).</Text>
        <Text style = {Styles.majorText}>4. Sharing Your Information</Text>
        <Text style = {Styles.minorText}>We do not sell, trade, or otherwise transfer your personal data to outside parties except as described below:</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>a) Service Providers:</Text>We may share your data with third-party service providers who assist us in operating our app, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>b) Legal Requirements:</Text> We may disclose your personal data if required to do so by law or in response to valid requests by public authorities.</Text>
        <Text style = {Styles.majorText}>5. Data Security</Text>
        <Text style = {Styles.minorText}>We implement a variety of security measures to maintain the safety of your personal data. These measures include encrypted storage and secure transmission protocols.</Text>
        <Text style = {Styles.majorText}>6. Data Retention</Text>
        <Text style = {Styles.minorText}>We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</Text>
        <Text style = {Styles.majorText}>7. Your Data Protection Rights</Text>
        <Text style = {Styles.minorText}>Depending on your location, you may have the following rights regarding your personal data:</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>a) Access:</Text> The right to access the personal data we hold about you.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>b) Correction:</Text> The right to request that we correct any information you believe is inaccurate.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>c) Deletion:</Text> The right to request that we delete your personal data.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>d) Restriction:</Text> The right to request that we restrict the processing of your personal data.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>e) Objection:</Text> The right to object to our processing of your personal data.</Text>
        <Text style = {Styles.textPoints}><Text style = {Styles.boldText}>f) Data Portability:</Text> The right to request that we transfer the data that we have collected to another organization or directly to you.</Text>
        <Text style = {Styles.majorText}>8. Changes to This Privacy Policy</Text>
        <Text style = {Styles.minorText}>We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</Text>
        <Text style = {Styles.majorText}>9. Contact Us</Text>
        <Text style = {Styles.minorText}>If you have any questions about this privacy policy, please contact us at:</Text>
        <Text style = {Styles.contactsTexts}>ScrapTradin</Text>
        <Text style = {Styles.contactsTexts}>786 Nutan Gram, Morepukur, Rishra, Hooghly, WB, IN</Text>
        <Text style = {Styles.contactsTexts}>Monuburman8820@gmail.com</Text>
        <Text style = {Styles.contactsTexts}>+91-8820015024</Text>
        <View style = {Styles.endElement} />
      </ScrollView>
    </View>
  )
}

export default PrivacyPolicyScreen;