import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import Authurcation from "../../middleware/Authucation";
import { useRoute, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserService from "../../service/UserService";
const Start = () => {
  const navigation = useNavigation();

  const [isVerified, setIsVerifide] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [email, setEmail] = useState("dotantu2002@gmail.com");
  const [password, setPassword] = useState("sa123");

  const handle_login = async () => {
    try {
      const token = await UserService.getAuthucation(email, password);
      if (token === undefined) {
        setIsStatus(true);
        return;
      }else{
        const data = await Authurcation.verifyToken(token);
        if (data === 0) {
          Alert.alert("Thông báo", "Xác thực email trước khi đăng nhập");
          return;
        }else if (data === null) {
          setIsStatus(true);
          return;
        }
        navigation.navigate("Tabs");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo_better.jpg")}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.welcome}>Welcome back</Text>
        <View style={styles.ground_Input}>
          <Ionicons
            style={styles.icon_Email}
            name="mail"
            size={20}
            color={"gray"}
          />
          <TextInput
            placeholder="Nhập email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.ground_Input}>
          <Ionicons
            style={styles.icon_Email}
            name="lock-closed"
            size={20}
            color={"gray"}
          />
          <TextInput
            placeholder="Nhập mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry="true"
          />
        </View>
        <View style={styles.option_pass}>
          <View style={styles.remember_pass}>
            <Ionicons
              style={styles.icon_Email}
              name="radio-button-off"
              size={20}
              color={"gray"}
            />
            <Text style={styles.color_pass}>Remember</Text>
          </View>
          <View style={styles.forget_pass}>
            <Text style={styles.color_pass}>Forget password</Text>
          </View>
        </View>
        {isStatus ? (
          <View style={styles.error_login}>
            <Ionicons style={styles.icon_error_login} name="close-circle-outline" size={20} color={"red"}/>
            <Text
              style={{
                textAlign: "center",
                color: "red",
              }}> Thông tin tài khoản không chính xác
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button_click} onPress={handle_login}>
          <Text style={styles.text_button}>Đăng Nhập</Text>
        </TouchableOpacity>
        <Text style={styles.text_question}>Hoặc đăng nhập với</Text>
        <View style={styles.login_with}>
          <TouchableOpacity style={styles.button_google}>
            <Ionicons
              style={styles.icon_google}
              name="logo-google"
              size={20}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.register}>
          <Text style={{ color: "gray" }}>Chưa có tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.text_register}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  image: {
    width: 120,
    height: 120
  },
  form: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 40
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DA251e"
  },
  ground_Input: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 5,
    borderBottomWidth: 1
  },
  icon_Email: {
    marginRight: 15
  },
  option_pass: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35
  },
  remember_pass: {
    display: "flex",
    flexDirection: "row"
  },
  bottom: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 45
  },
  color_pass: {
    color: "#DA251e",
    fontWeight: "bold"
  },
  button_click: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    display: "flex",
    justifyContent: "center",
    borderRadius: "50%",
    width: "100%",
    backgroundColor: "#DA251e", // Background color
    fontSize: 20,
    color: "white"
  },
  text_button: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "500"
  },
  text_question: {
    color: "gray",
    marginTop: 25,
    textAlign: "center",
    fontWeight: "500"
  },
  login_with: {
    marginTop: 25
  },
  login_with: {
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  button_google: {
    width: 40,
    height: 40,
    backgroundColor: "#DA251e",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  register: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  text_register: {
    marginLeft: 5,
    color: "red",
    fontWeight: "bold"
  },
  error_login:{
    paddingVertical: 5,
    borderRadius: 20,
    display:'flex',
    flexDirection: "row",
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 0, 0,0.1)',
    marginTop: 20,
    fontWeight: 500
  },
  icon_error_login:{
    marginRight: 5,
    display: "block",
  }
});
export default Start;
