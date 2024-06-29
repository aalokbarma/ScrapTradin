import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreenOne from '../screens/WelcomeScreenOne';
import WelcomeScreenTwo from '../screens/WelcomeScreenTwo';
import WelcomeScreenThree from '../screens/WelcomeScreenThree';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="WelcomeOne" component={WelcomeScreenOne} />
                <Stack.Screen name="WelcomeTwo" component={WelcomeScreenTwo} />
                <Stack.Screen name="WelcomeThree" component={WelcomeScreenThree} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;