
import { jwtDecode } from 'jwt-decode';

const  TokenExtraction = {
    getNameUser : (token) => {
        const name = jwtDecode(token).name;
        return name;
    },
    isTokenExpired: (token) => {
        try {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return true;
        }
      },
}

export default TokenExtraction;