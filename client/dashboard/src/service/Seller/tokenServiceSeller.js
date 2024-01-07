import { jwtDecode } from 'jwt-decode';

// const token = localStorage.getItem('token');
const TokenService = {
    getIdUserByToken: (token) => {
        const idSeller = jwtDecode(token).id;
        return idSeller;
    },
    // getToken:() => {
    //     return token
    // }
}
export default TokenService;