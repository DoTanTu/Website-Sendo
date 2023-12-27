import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute, useNavigation } from "@react-navigation/native";
const Profile = () => {
  const navigation = useNavigation();
  const logout = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <TouchableOpacity onPress={()=> logout()}>
        <Text>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});