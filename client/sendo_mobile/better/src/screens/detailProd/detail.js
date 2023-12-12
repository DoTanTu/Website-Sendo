import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity,FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useRoute, useNavigation } from '@react-navigation/native';
import ImageView from '../../components/imageDetail/images';
import axios from 'axios';
const Detail = (props) => {

  const navigation = useNavigation();
  const route = useRoute();
  const idProd = route.params.id;
  const [productList, setProductList] = useState({ products:[]});

    useEffect(() => {
        getProducts(idProd);
    }, []);
  const getProducts = (idProd) => {
    axios({
        url: `https://6577469e197926adf62ddcf5.mockapi.io/api/products/${idProd}`,
        method: 'GET',
    }).then((result) => {
        setProductList(result.data);
    }).catch((err) => {
        console.log(err);
    });
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
           <ImageView senData={productList.image} />
        </View>
      </View>
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>{productList.name}</Text>
      </View>
    </View>
  );
};

export default Detail;
