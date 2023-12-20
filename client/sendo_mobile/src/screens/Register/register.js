import { 
    View, 
    Text, 
    Alert, 
    StyleSheet,  
    Image, 
    TextInput, 
    TouchableOpacity
 } from 'react-native';
 import React, {useState} from 'react';
 import UserService from '../../service/UserService';
import { useRoute, useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";

const Register = () => {

    const navigation = useNavigation();

    const [iconMessage , setIconMessage] = useState("");
    const [textMessage, setTextMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [colorText, setColorText] = useState("");
    const [bgText, setBgText] = useState("");

    const [nameUser, setNameUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handle_register = async ()=>{
        try{
            if(checkData(password, confirmPassword) == true){
              setStatus(false);
              const register = await UserService.createAccount(nameUser, email, password);
              if(register === 200){
                  Alert.alert("Thành công", "Xác nhận email trước khi đăng nhập");
                  navigation.navigate("Login");
              }else if(register === 400){
                setStatus(true);
                setIconMessage('close-circle-outline');
                setTextMessage('Tài khoản đã tồn tại');
                setColorText('red');
                setBgText('rgba(255, 0, 0,0.1)');
                return;
              }
            }
            else{
              setStatus(true);
              setIconMessage('close-circle-outline');
              setTextMessage('Nhập lại mật khẩu không chính xác');
              setColorText('red');
              setBgText('rgba(255, 0, 0,0.1)');
              return;
            }
        }catch(e){
          console.log("Error" + e);
        }
       }
       
      const checkData = (password, confirmPassword) =>  password === confirmPassword
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image style={styles.image}  source={require('../../../assets/logo_better.jpg')} />
      </View>
      <View style={styles.form}>
        <Text style={styles.welcome}>Welcome back</Text>
        <View style={styles.ground_Input}>
          <Ionicons style={styles.icon_Email} name="person" size={20} color={'gray'}/>
          <TextInput placeholder='Nhập họ và tên' value={nameUser} onChangeText={setNameUser} />
        </View>
        <View style={styles.ground_Input}>
          <Ionicons style={styles.icon_Email} name="mail" size={20} color={'gray'}/>
          <TextInput placeholder='Nhập email' value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.ground_Input}>
          <Ionicons style={styles.icon_Email} name="lock-closed" size={20} color={'gray'}/>
          <TextInput placeholder='Nhập mật khẩu' value={password} onChangeText={setPassword} secureTextEntry={true} />
        </View>
        <View style={styles.ground_Input}>
          <Ionicons style={styles.icon_Email} name="lock-closed" size={20} color={'gray'}/>
          <TextInput placeholder='Nhập lại khẩu' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} />
        </View>
        <View style={styles.option_pass}>
          <View style={styles.remember_pass}>
            <Ionicons style={styles.icon_Email} name="radio-button-off" size={20} color={'gray'}/>
            <Text style={styles.color_pass}>Remember</Text>
          </View>
          <View style={styles.forget_pass}>
            <Text style={styles.color_pass}>Forget password</Text>
          </View>
        </View>
        { 
          status==true ? (
            <View style={{
                paddingVertical: 5,
                borderRadius: 20,
                display:'flex',
                flexDirection: "row",
                alignItems : 'center',
                justifyContent: 'center',
                backgroundColor: bgText,
                marginTop: 20,
                fontWeight: 500
            }}>
              <Ionicons style={styles.icon_Email} name={iconMessage} size={20} color={colorText}
              />
              <Text
              style={{
                color: colorText,
                fontWeight: 500
              }}
            >
            {textMessage}
            </Text>
            </View>
          ) : null}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button_click} onPress={handle_register}>
          <Text style={styles.text_button}>Đăng ký</Text>
        </TouchableOpacity>
        <Text style={styles.text_question}>Hoặc đăng ký với</Text>
        <View style={styles.register_with}>
          <TouchableOpacity style={styles.button_google}>
            <Ionicons style={styles.icon_google} name="logo-google" size={20} color={'white'}/>
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text style={{color:"gray"}}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.text_register}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header:{
      flex:3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image:{
      width:120,
      height:120,
    },
    form:{
      flex:4,
      width: '100%',
      paddingHorizontal: 40,
    },
    welcome:{
      fontSize: 22,
      fontWeight:'bold',
      color:'#DA251e'
    },
    ground_Input:{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      paddingVertical: 5,
      borderBottomWidth: 1,
    },
    icon_Email:{
      marginRight: 15,
    },
    option_pass:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 35,
    },
    remember_pass:{
      display: 'flex',
      flexDirection: 'row',
    },
    bottom:{
      flex:3,
      width: '100%',
      paddingHorizontal: 45,
    },
    color_pass:{
      color: '#DA251e',
      fontWeight: 'bold'
    },
    button_click: {
      paddingHorizontal: 10,
      paddingVertical: 12,
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '50%',
      width: "100%",
      backgroundColor: "#DA251e",  // Background color
      fontSize: 20,
      color: "white",
    },
    text_button : {
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "500"
    },
    text_question:{
      color: 'gray',
      marginTop: 25,
      textAlign: 'center',
      fontWeight: "500"
    },
    register_with:{
      marginTop: 25,
    },
    register_with:{
      marginTop:25,
      display: "flex",
      flexDirection: "row",
      justifyContent: 'center',
    },
    button_google:{
      width: 40,
      height: 40,
      backgroundColor: '#DA251e',
      borderRadius: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    register:{
      marginTop: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "center",
    },
    text_register:{
      marginLeft: 5,
      color: 'red',
      fontWeight: 'bold'
    }
})