import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import your screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import Map from './screens/Map';
import Explore from './screens/Explore';
import Falcon from './screens/Falcon';

// Import your PNG images
import homeIcon from './images/home.png';
import settingsIcon from './images/user (2).png';
import exploreIcon from './images/compass.png';
import falconIcon from './images/sky.png';
import mapIcon from './images/globe.png'
 
const Tab = createBottomTabNavigator();

const MainAppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            const routeName = route.name;

            if (routeName === 'Home') {
              iconSource = homeIcon;
            } else if (routeName === 'You') {
              iconSource = settingsIcon;
            } else if (routeName === 'Explore') {
                iconSource = exploreIcon;
            } else if (routeName === 'Falcon') {
                iconSource = falconIcon;
            } else if (routeName === 'Map') {
                iconSource = mapIcon;
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: 34,
                  height: 34,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarStyle: {
            backgroundColor: 'white',
            height: 75,
            paddingBottom: 10,
            paddingTop: 10,
            
          },
          headerShown: false,
          activeTintColor: 'gray',
          inactiveTintColor: 'black',
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: {
            fontSize: 11
          }
        })}
        
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Falcon" component={Falcon} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen
          
          name="You"
          component={Profile}
          options={{
            title: 'You',
            tabBarLabel: 'You',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainAppContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});