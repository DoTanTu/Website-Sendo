// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDr46naLuPIWRAC3qBPS2sLdbYigp1V7TU",
  authDomain: "uploadimage-2059c.firebaseapp.com",
  projectId: "uploadimage-2059c",
  storageBucket: "uploadimage-2059c.appspot.com",
  messagingSenderId: "567749981727",
  appId: "1:567749981727:web:4258bde8cf87fc930e472a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);