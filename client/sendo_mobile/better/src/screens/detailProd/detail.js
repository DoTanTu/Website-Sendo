import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity,FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useRoute, useNavigation } from '@react-navigation/native';
import ImageView from '../../components/imageDetail/images'
const Detail = (props, navigation) => {

    if (route.params && route.params.id) {
        const idProd = route.params.id;
        console.log(idProd);
    } else {
        console.log("Không có giá trị id trong params");
    }
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Product',
      headerBackTitleVisible: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home-outline" size={24} color="black" style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Share')}>
            <Ionicons name="cart-outline" size={24} color="black" style={{ marginRight: 10 }} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
     
      <View style={styles.body}>
        <View style={styles.image_list}>
          <ImageView/>
        </View>
      </View>
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>This is an overlay</Text>
      </View>
    </View>
  );
};

export default Detail;
