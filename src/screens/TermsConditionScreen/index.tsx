import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../constants/Colors';
import Header from '../../common/Header';

const TermsConditionScreen = ({ navigation }: any) => {

  const onBackButtonPress = () => {
    navigation.goBack();
  }

  return (
    <View style={Styles.privacyPolicyScreen}>
      <Header onBackButtonPress = {onBackButtonPress} title = {"Terms & Conditions"} />
      <ScrollView style={Styles.contentContainer}>
        <Text style={Styles.titleText}>Effective Date: <Text style={Styles.minorText}>1st July 2024</Text></Text>
        <Text style={Styles.majorText}>1. Introduction</Text>
        <Text style={Styles.minorText}>Welcome to ScrapTradin. By using our mobile application, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree to these terms and conditions, you should not use this app.</Text>
        <Text style={Styles.majorText}>2. Use of the Application</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>a) Eligibility:</Text> You must be at least 18 years old to use this application.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>b) Account Registration:</Text> To use certain features, you must register for an account and provide accurate information. You are responsible for maintaining the confidentiality of your account credentials.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>c) Prohibited Conduct:</Text> You agree not to use the app for any unlawful purpose or any purpose prohibited by these terms.</Text>
        <Text style={Styles.majorText}>3. Services</Text>
        <Text style={Styles.minorText}>ScrapTradin provides a platform for users to buy and sell scrap materials. We do not own, buy, or sell scrap materials. Transactions are solely between users.</Text>
        <Text style={Styles.majorText}>4. User Obligations</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>a) Compliance:</Text> You agree to comply with all applicable laws and regulations.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>b) Accuracy of Information:</Text> You are responsible for ensuring that the information you provide is accurate and up-to-date.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>c) Transactions:</Text> You are responsible for all transactions conducted through your account.</Text>
        <Text style={Styles.majorText}>5. Fees and Payments</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>a) Fees:</Text> We may charge fees for certain services. All fees are disclosed at the time of the transaction.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>b) Payment:</Text> Payments are processed through third-party payment processors. We are not responsible for any issues related to payment processing.</Text>
        <Text style={Styles.majorText}>6. Intellectual Property</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>a) Ownership:</Text> We own all rights, titles, and interests in and to the app, including all intellectual property rights.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>b) License:</Text> We grant you a limited, non-exclusive, non-transferable, revocable license to use the app for personal, non-commercial use.</Text>
        <Text style={Styles.majorText}>7. Termination</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>a) Termination by Us:</Text> We may terminate or suspend your account at any time without notice if you violate these terms.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>b) Termination by You:</Text> You may terminate your account at any time by contacting us.</Text>
        <Text style={Styles.majorText}>8. Disclaimers and Limitation of Liability</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>a) Disclaimers:</Text> The app is provided "as is" and "as available" without warranties of any kind.</Text>
        <Text style={Styles.textPoints}><Text style={Styles.boldText}>b) Limitation of Liability:</Text> To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the app.</Text>
        <Text style={Styles.majorText}>9. Governing Law</Text>
        <Text style={Styles.minorText}>These terms are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</Text>
        <Text style={Styles.majorText}>10. Changes to Terms</Text>
        <Text style={Styles.minorText}>We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of the app after any changes indicates your acceptance of the new terms.</Text>
        <Text style={Styles.majorText}>11. Contact Us</Text>
        <Text style={Styles.minorText}>If you have any questions about these terms and conditions, please contact us at:</Text>
        <Text style={Styles.contactsTexts}>ScrapTradin</Text>
        <Text style={Styles.contactsTexts}>786 Nutan Gram, Morepukur, Rishra, Hooghly, WB, IN</Text>
        <Text style={Styles.contactsTexts}>Monuburman8820@gmail.com</Text>
        <Text style={Styles.contactsTexts}>+91-8820015024</Text>
        <View style={Styles.endElement} />
      </ScrollView>
    </View>
  )
}

export default TermsConditionScreen;