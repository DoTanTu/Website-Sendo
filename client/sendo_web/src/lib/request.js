import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.2.20:3000/api",
});

export default instance;
