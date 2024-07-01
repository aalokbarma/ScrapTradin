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
          <ActivityIndicator color={Colors.Color6} />
        </View>
        :
        <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
              {
                welcomeStatus == "skipped" || welcomeStatus == "proceeded" ? 
                <Stack.Screen name="Home" component={HomeScreen} />
                :
                <>
                <Stack.Screen name="WelcomeOne" component={WelcomeScreenOne} />
                <Stack.Screen name="WelcomeTwo" component={WelcomeScreenTwo} />
                <Stack.Screen name="WelcomeThree" component={WelcomeScreenThree} />
                <Stack.Screen name="WelcomeFour" component={WelcomeScreenFour} />
                <Stack.Screen name="WelcomeFive" component={WelcomeScreenFive} />
                <Stack.Screen name="WelcomeSix" component={WelcomeScreenSix} />
                <Stack.Screen name="Home" component={HomeScreen} />
                </>
              }
            </Stack.Group>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default Navigation;