import React from 'react';
import axios from 'axios';
// const BASE_URL = 'https://website-ecommerce-kappa.vercel.app';
const BASE_URL = 'http://192.168.2.20:3000';

 const UserService ={

    getAuthucation : async (email, password) => {
        try{
            const response = await axios.post(`${BASE_URL}/api/login`, {email: email, password: password});
            return response.data.token;
        }
        catch(error){
            console.log(error);
        }
    },

    createAccount : async (name, email, password) => {
        try{
            const response = await axios.post(`${BASE_URL}/api/register`, 
            {
                name: name,
                email: email,
                password: password,
                is_Seller: 0,
                address: "",
                phoneNumber: "",
                gender: "0",
                birthday: ""
            });
            return response.status;
        }
        catch(error){
            console.log(error);
        }
    }
    
}   
export default UserService