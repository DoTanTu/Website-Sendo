import { View, Text,Image , StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import styles from "./style"
import {useNavigation} from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const ProductItem = (props) => {
    const navigation = useNavigation();
    const prodId = props.senData.id;
    const prodName = props.senData.name;
    const prodPrice = props.senData.price;
    const images = props.senData.image[0];
    const prodStar = props.senData.star;
    const proAddress = props.senData.address;
    const proSold = props.senData.sold;
    const prodDiscount = props.senData.discount;
    const prodOld = '10';

    const handleMoreButton = (prodId) => {
      navigation.navigate("Detail", { id: prodId });
    };
  return (
    <TouchableOpacity style={styles.productItem} onPress={() => handleMoreButton(prodId)}>               
      <View style={styles.images_item}>
        <Image source={{ uri: images }} width={(Dimensions.get('window').width)/2} style={styles.productImage} />
      </View>
      <View style={styles.infor_item}>
        <Text style={styles.title_item} numberOfLines={2} ellipsizeMode="tail">{prodName}</Text>
        <View style={styles.discount}>
            <Text style={styles.old_price}>{`${prodOld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`}</Text>
            <Text style={styles.discount_price}>{`-${prodDiscount}%`}</Text>
        </View>
        <Text style={styles.price_sale} >{`${prodPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`}</Text>
        <View style={styles.policy}>
            <Image source={require('../../contain/images/money.png')} style={styles.icon_money} />
            <Text style={styles.title_policy}>Mua trước trả sau</Text>
        </View>
        <View>
            <Text style={styles.productSold}>Đã bán {proSold}</Text>
        </View>
        <View style={styles.bottom}>
            <View style={styles.userStar}>
                <Text style={styles.numberStar}>{prodStar}</Text>
                <Ionicons style={styles.icon_star} name="star" size={12} color={'#ffc600'}/>
            </View>
            <Text  style={styles.address}>{proAddress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem