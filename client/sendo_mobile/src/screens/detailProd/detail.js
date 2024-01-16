import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity,FlatList, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import { useRoute, useNavigation } from '@react-navigation/native';
import ImageView from '../../components/imageDetail/images';
import axios from 'axios';
import ProductService from '../../service/ProductService';
const Detail = (props) => {

  const navigation = useNavigation();
  const route = useRoute();
  const idProd = route.params.id;
  const [productList, setProductList] = useState();
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
      try {
          const result = await ProductService.getProductDetail(idProd);
          setProductList(result.data);  
      } catch (error) {
        console.log(error);
      }
      
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
      {productList ? (
        <View style={styles.body}>
          <View style={styles.imageList}>
            <Image source={{ uri: productList.image }} style={styles.image} />
          </View>
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{productList.product_name}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
  
};

export default Detail;
