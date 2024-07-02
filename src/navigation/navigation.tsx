import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreenOne from '../screens/WelcomeScreenOne';
import WelcomeScreenTwo from '../screens/WelcomeScreenTwo';
import WelcomeScreenThree from '../screens/WelcomeScreenThree';
import WelcomeScreenFour from '../screens/WelcomeScreenFour';
import WelcomeScreenFive from '../screens/WelcomeScreenFive';
import WelcomeScreenSix from '../screens/WelcomeScreenSix';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
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

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


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

  const Tab = createBottomTabNavigator();

  const HomeBottomNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Group 
          screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                return <AntDesign name="home" size={size} color={color} /> 
                // iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Rates') {
                return <MaterialIcons name="currency-exchange" size={size} color={color} />
              } else if (route.name === 'Schedule') {
                return <MaterialIcons name="schedule" size={size} color={color} />
              } else if (route.name === 'Pickup') {
                return <FontAwesome6 name="truck-pickup" size={size} color={color} />
              } else if (route.name === 'Profile') {
                return <FontAwesome name="user-circle-o" size={size} color={color} />
              }
  
              // You can return any component that you like here!
              // return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarStyle: styles.tabBarStyle,
            tabBarActiveTintColor: Colors.Color5,
            tabBarInactiveTintColor: Colors.majorText,
            headerShown: false,
          })}
          >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
          />
          <Tab.Screen 
            name="Rates" 
            component={WelcomeScreenOne} 
          />
          <Tab.Screen 
            name="Schedule" 
            component={WelcomeScreenTwo} 
          />
          <Tab.Screen 
            name="Pickup" 
            component={WelcomeScreenThree} 
          />
          <Tab.Screen 
            name="Profile" 
            component={WelcomeScreenFour} 
          />
        </Tab.Group>
      </Tab.Navigator>
    );
  }

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
                <Stack.Screen name="Home" component={HomeBottomNavigator} />
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
                welcomeStatus == "login" && <Stack.Screen name="Home" component={HomeBottomNavigator} />
              }
            </Stack.Group>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tabBarStyle: {
    backgroundColor: '#f8f8f8',
    borderTopWidth: 0,
    elevation: 10, // for Android shadow
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});

export default Navigation;