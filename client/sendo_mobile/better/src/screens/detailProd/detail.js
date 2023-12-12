import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import styles from './style'
const detail = () => {
    const route = useRoute();
    const id = route.params.id;
    console.log(route)
  return (
    <View style={styles.container}>
        <View>Headr</View>
        <View style={styles.body}>
            <View style={styles.image_list}>
            <FlatList
                data={imageUrls}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item }} style={styles.image} />
                </View>
                )}
            />
            </View>
        </View>
    </View>
  )
}

export default detail
