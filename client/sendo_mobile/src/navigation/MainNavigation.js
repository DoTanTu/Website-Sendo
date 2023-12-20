import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStack } from './StackNavigation';

const Tab = createBottomTabNavigator();
const MainContainer = () => {
  return (
    <NavigationContainer>
       <MainStack/>
    </NavigationContainer>
  );
};

export default MainContainer;
