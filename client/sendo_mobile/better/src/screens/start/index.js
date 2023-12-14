import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import { ProductStack} from '../../navigation/StackNavigation'
const Start = () => {
  const navigation = useNavigation();
  return (

    <View style={styles.container}>
        <Button style={styles.button } title='Redirect Home' onPress={()=>navigation.navigate('Tabs')}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        color:"red",
        padding:10,
        backgroundColor: 'red',
        fontSize:20
    }
});
export default Start