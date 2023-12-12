import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import ProfileScreen from './screens/ProfileScreen';

import DetailProductNavigator from './screens/DetailProduct';

const homeName = 'Home';
const cateName = 'Category';
const proName = 'Profile';

const Tab = createBottomTabNavigator();
const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline'; // Fixed typo in iconName
            } else if (rn === cateName) {
              iconName = focused ? 'grid' : 'grid-outline'; // Fixed typo in iconName
            } else if (rn === proName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline'; // Fixed typo in iconName
            }

            return <Ionicons name={iconName} size={size} color={color} />; // Fixed typo in component name
          },
          labelStyle: { display: 'none' },
          style: {padding: 10,height:70}
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} options={{
          headerShown: false,
        }} />
        <Tab.Screen name={cateName} component={CategoryScreen} />
        <Tab.Screen name={proName} component={ProfileScreen} />
        <Tab.Screen name="DetailScreen" component={DetailProductNavigator} options={({ route }) => ({
            tabBarButton: () => null,
            headerShown: true,
          })} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
