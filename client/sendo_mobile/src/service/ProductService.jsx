import React from 'react';
import axios from 'axios';
// const BASE_URL = 'https://website-ecommerce-kappa.vercel.app';
const BASE_URL = 'http://192.168.2.20:3000';

 const ProductService ={

    getAllProduct : async () => {
        try{
            const response = await axios.get(`${BASE_URL}/api/products`);
            console.log(response.data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    },
    getProductDetail: async (id) => {
        try {
            const respone = await axios.get(`${BASE_URL}/api/product/${id}`);
            return respone;
        } catch (error) {
            console.log(error);
        }
    },
    // createAccount : async (name, email, password) => {
    //     try{
    //         const response = await axios.post(`${BASE_URL}/api/register`, 
    //         {
    //             name: name,
    //             email: email,
    //             password: password,
    //             is_Seller: 0,
    //             address: "",
    //             phoneNumber: "",
    //             gender: "0",
    //             birthday: ""
    //         });
    //         return response.status;
    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
    
}   
export default ProductService