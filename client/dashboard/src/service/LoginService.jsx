import axios from 'axios';

const BASE_URL = 'http://192.168.2.20:3000';
const LoginService={
    adminLogin : async (email, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/admin/login`, {email : email, password : password});
            return respone.data;
        } catch (error) {
            console.error(error);
        }
    },
    sellerLogin : async (email, password) => {
        try {
            const respone = await axios.post(`${BASE_URL}/api/seller/login`, {email : email, password : password});
            return respone.data;
        } catch (error) {
            console.error(error);
        }
    }
}
export {LoginService};