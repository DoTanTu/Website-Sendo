import axios from "axios";
const instance = axios.create({
  baseURL: "https://discord-api-seven.vercel.app/api",
});

export default instance;
