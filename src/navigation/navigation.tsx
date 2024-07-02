import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreenOne from '../screens/WelcomeScreenOne';
import WelcomeScreenTwo from '../screens/WelcomeScreenTwo';
import WelcomeScreenThree from '../screens/WelcomeScreenThree';
import WelcomeScreenFour from '../screens/WelcomeScreenFour';
import WelcomeScreenFive from '../screens/WelcomeScreenFive';
import WelcomeScreenSix from '../screens/WelcomeScreenSix';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import Colors from '../constants/Colors';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import OTPScreen from '../screens/OTPScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import TermsConditionScreen from '../screens/TermsConditionScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createStackNavigator();

const Navigation = () => {

  const [welcomeStatus, setWelcomeStatus] = useState<null|string>(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('welcomeStatus');
      setWelcomeStatus(value);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() =>{
    getData();
    console.warn("WelcomeStatus => " + welcomeStatus)
  }, [welcomeStatus]);

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <NavigationContainer>
      {
        loading ? 
        <View style = {{width: screenWidth, height: screenHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.background}}>
          <ActivityIndicator color={Colors.Color6} size={70} />
        </View>
        :
        <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
              {
                welcomeStatus == "skipped" || welcomeStatus == "proceeded" ? 
                <>
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ForgetPassoword" component={ForgetPasswordScreen} />
                <Stack.Screen name="OTP" component={OTPScreen} />
                <Stack.Screen name="SetPassword" component={SetPasswordScreen} />
                <Stack.Screen name="AboutUs" component={AboutUsScreen} />
                <Stack.Screen name="Privacy" component={PrivacyPolicyScreen} />
                <Stack.Screen name="Terms" component={TermsConditionScreen} />
                <Stack.Screen name="Reset" component={ResetPasswordScreen} />
                </>
                :
                <>
                <Stack.Screen name="WelcomeOne" component={WelcomeScreenOne} />
                <Stack.Screen name="WelcomeTwo" component={WelcomeScreenTwo} />
                <Stack.Screen name="WelcomeThree" component={WelcomeScreenThree} />
                <Stack.Screen name="WelcomeFour" component={WelcomeScreenFour} />
                <Stack.Screen name="WelcomeFive" component={WelcomeScreenFive} />
                <Stack.Screen name="WelcomeSix" component={WelcomeScreenSix} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                </>
              }
              {
                welcomeStatus == "login" && <Stack.Screen name="Home" component={HomeScreen} />
              }
            </Stack.Group>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default Navigation;