
import { jwtDecode } from 'jwt-decode';

const  TokenExtraction = {
    getNameUser : (token) => {
        const name = jwtDecode(token).name;
        return name;
    }
}
export default TokenExtraction;