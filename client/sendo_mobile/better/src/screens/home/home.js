import {Text, TextInput, View, TouchableOpacity, ScrollView,Image, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React ,{ useEffect, useState } from "react";
import axios from "axios";
import styles from "./style";
import ProductItem from '../../components/product/index'
const Home = () => {
  const [productList, setProductList] = useState([]);
  const handlerClick = ()=>{}
  useEffect(() => {
      getProducts();
  }, []);

  const getProducts = () => {
      axios({
          url: 'https://6577469e197926adf62ddcf5.mockapi.io/api/products',
          method: 'GET',
      }).then((result) => {
          setProductList(result.data);
      }).catch((err) => {
          console.log(err);
      });
  }
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.logo}>
            <View style={styles.image_logo}>
                <Image
                    style={styles.images}
                    source={require('../../contain/images/better.png')}
                />
            </View>
          </TouchableOpacity>
          <View style={styles.search}>
            <Ionicons name="search-outline" size={22} color="black" marginRight={5}></Ionicons>
            <View style={styles.input_search} >
                <TextInput placeholder="Nhập giá trị" />
            </View>
          </View>
          <TouchableOpacity style={styles.cart}>
            <Ionicons name="cart-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.categories}>
          <View style={styles.list_item}>
            <ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.item_cate}>
                    <Text style={styles.title_item} >Cho bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_cate}>
                    <Text style={styles.title_item} >Cho bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_cate}>
                    <Text style={styles.title_item} >Cho bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_cate}>
                    <Text style={styles.title_item} >Cho bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_cate}>
                    <Text style={styles.title_item} >Cho bạn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_cate}>
                    <Text style={styles.title_item} >Cho bạn</Text>
                </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.view_all_cate}>
            <Ionicons name="grid-outline" size={20} color={'white'}/>
          </View>
        </View>
      </View>
      <View style={styles.body}>
      <FlatList style={styles.list_prod}
            data={productList}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
                return <ProductItem senData={item} setAction={handlerClick}/>
            }}
            numColumns={2}
            />
      </View>
    </View>
  );
};

export default Home;
