import React, { Component } from 'react'
import Detail from '../../screens/detailProd/detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export class DetailProduct extends Component {
  render() {
    return ( 
      <Detail />
    )
  }
}

export default DetailProduct