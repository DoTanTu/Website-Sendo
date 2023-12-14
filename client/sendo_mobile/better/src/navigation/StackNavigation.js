import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from './TabsNavigation';
import StartUpScreen from '../screens/start/index';
import HomeScreen from '../screens/home/home';
import DetailScreen from '../screens/detailProd/detail';
import CheckoutProduct from '../screens/checkout/checkout';
import CartScreen from '../screens/cart/cart';

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="StartUp" component={StartUpScreen}></Stack.Screen>
        <Stack.Screen name="Tabs" component={TabsNavigation}></Stack.Screen>
    </Stack.Navigator>
  )
}

const ProductStack = () => {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
            <Stack.Screen name="checkoutProduct" component={CheckoutProduct}></Stack.Screen>
        </Stack.Navigator>
    )
}

const CartStack = () => {
    return(
        <Stack.Navigator 
         screenOptions={{headerShown:false}}>
            <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
            <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
            <Stack.Screen name="checkoutProduct" component={CheckoutProduct}></Stack.Screen>
        </Stack.Navigator>
    )
}

export{MainStack, ProductStack, CartStack}