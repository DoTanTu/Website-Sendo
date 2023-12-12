import { Text, StyleSheet, View } from 'react-native'
export default styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'yellow',

    },
    header:{
        flex: 2,
        backgroundColor:'#C1080C',
        paddingHorizontal: 15,
    },
    navbar:{
        paddingTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingBottom: 10,
    },
    image_logo:{
        width:50,
        height:50,
        objectFit: 'cover',
    },
    images:{
        width:'100%',
        height:'100%'
    },
    search:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:5,
        height:40,
        alignItems:'center',
        paddingHorizontal:10,
    },
    input_search:{
        width:'50%',
    },
    categories:{
        flexDirection:'row',
    },
    list_item:{
        width:'92%'
    },
    scrollView:{
    },
    item_cate:{
        marginRight:10,
        color: 'yellow',
    },
    title_item:{
        color: 'white',
        fontSize:16
    },
    view_all_cate:{
        width:'8%',
        paddingLeft:5,
        backgroundColor:'#C1080C'
    },
    body:{
        flex:9,
        backgroundColor:'#F4F4F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list_prod:{
        width:'100%',
    }
});