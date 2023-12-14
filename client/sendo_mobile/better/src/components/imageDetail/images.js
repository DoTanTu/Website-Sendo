import React, { useState , useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Images = (props) => {

  [ImgAcitve, setImgActive] = useState(0);

  const arrayImages= props.senData;
  
  onchange= (nativeEvent) => {
    if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != ImgAcitve){
            setImgActive(slide);
        }
    }
  }
  useEffect(() => {
    
    }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
         onScroll={({nativeEvent})=> onchange(nativeEvent)}
         showsHorizontalScrollIndicator={false}
         pagingEnabled
         horizontal
         style={styles.wrap}>
            {
               arrayImages
                ? arrayImages.map((e, index) => (
                    <Image
                      key={index}
                      resizeMode='stretch'
                      style={styles.wrap}
                      source={{ uri: e }}
                    />
                  ))
                : null
            }
        </ScrollView>
        <View style={styles.wrapDot}>
            {
                arrayImages
                ? arrayImages.map((e, index) => 
                    <Text 
                        key={index}
                        style={ImgAcitve == index ? styles.dotActive : styles.dot}
                    >
                        ●
                    </Text>
                )
                : null
            }
        </View>
      </View>
    </SafeAreaView>
  );

};
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    wrap: {
      width: WIDTH,
      height: HEIGHT * 0.35,
      objectFit: 'cover',
    },
    wrapDot:{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive:{
        margin: 3,
        color: 'black'
    },
    dot: {
        margin: 3,
        color: 'white'
    }
  });



export default Images;
