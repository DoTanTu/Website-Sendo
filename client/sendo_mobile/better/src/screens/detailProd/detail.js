import { View, Text ,FlatList, TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './style'
const detail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const id = route.params.id;
    useEffect(() => {
        navigation.setOptions({
          headerShown: true,
          title: `Product ${id}`,
          headerBackTitleVisible: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection:'row', marginRight:10}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Ionicons
                  name="home-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert("Share")}>
                <Ionicons
                  name="cart-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            </View>
          )
        });
      }, [navigation, id]);
  return (
    <View style={styles.container}>
        <View></View>
        <View style={styles.body}>
            <View style={styles.image_list}>
                <Text>{id}</Text>
            </View>
        </View>
    </View>
  )
}

export default detail
