import { Text,StyleSheet, View } from 'react-native'

export default styles = StyleSheet.create({
      productItem: {
        flex: 1,
        margin: 4,
        overflow: 'hidden',
        borderColor: '#ddd',
        borderWidth: 0.5,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
      images_item:{
        height: '100',
      },
      productImage: {
        width: '100%',
        height: 200,
        objectFit: 'cover',
        marginBottom: 8,
      },
      infor_item:{
        paddingVertical: 4,
        paddingHorizontal:8,
        paddingBottom:8
      },
      price_sale:{
        color:'red',
        fontSize:16,
        fontWeight:'bold',
      },
      discount:{
        paddingTop: 5,
        flexDirection:'row',
      },
      old_price:{
        fontSize:12,
        textDecorationLine:'line-through',
        color:'#a9a9a9',
      },
      discount_price:{
        fontSize:12,
        color:'red',
        marginLeft:5,
      },
      policy:{
        marginVertical:5,
        width:'auto',
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor:'#FDEBE0',
        borderRadius:20,
        paddingHorizontal:5,
        paddingVertical:2,
      },
      icon_money:{
        width:12,
        height:12,
      },
      title_policy:{
        marginLeft:5,
        fontSize:12,
        color:'#D5600C',
        fontWeight:500,
      },
      productSold:{
        fontSize:11,
      },
      bottom:{
        flexDirection: 'row',
        alignItems:'center',
        marginTop:5,
        justifyContent: 'space-between',
      },
      userStar:{
        flexDirection: 'row',
        alignItems:'center',
      },
      numberStar:{
        fontSize:12,
      },
      icon_star:{
        marginLeft:2,
      },
      address:{
        fontSize:12,
      }
    })