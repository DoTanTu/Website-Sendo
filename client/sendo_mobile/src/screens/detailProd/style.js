import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styleDetail = StyleSheet.create({
    container: {
        flex: 1,
      },
      overlay: {
       
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        zIndex: 1,
      },
      imageList:{
        width: '100%',
        height: 330
      },
      overlayText: {
        fontSize: 16,
        color: 'black',
      },
      body: {
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
});
export default styleDetail;