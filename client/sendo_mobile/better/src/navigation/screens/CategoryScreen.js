import { View, Text } from 'react-native'
import React from 'react'

const CategoryScreen = ({navigation}) => {
  return (
    <View  style={{flex:1,alignItems:'center', justifyContent: 'center', color:'black'}} >
      <Text onPress={()=>navigation.navigate('Profile',{name:'TanTu'})}>CategoryScreen</Text>
    </View>
  )
}

export default CategoryScreen