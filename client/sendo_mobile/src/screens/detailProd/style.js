import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styleDetail = StyleSheet.create({
    container: {
        flex: 1,
      },
      overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        zIndex: 1,
      },
      overlayText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      body: {
        justifyContent: 'center',
      },
      image_list: {

      },
});
export default styleDetail;