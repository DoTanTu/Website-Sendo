import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CartStack , ProductStack} from './StackNavigation';
import ProfileStack from '../screens/profile/profile';
const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Danh mục') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Cá nhân') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null, // Ẩn label
        tabBarStyle: { padding: 10 },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: '#DA251E',
        inactiveTintColor: 'grey',
      }}
    >
        <Tabs.Screen name="Trang chủ" component={ProductStack}></Tabs.Screen>
        <Tabs.Screen name="Danh mục" component={CartStack}></Tabs.Screen>
        <Tabs.Screen name="Cá nhân" component={ProfileStack}></Tabs.Screen>
    </Tabs.Navigator>
  )
}

export default TabsNavigation