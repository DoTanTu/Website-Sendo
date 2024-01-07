
import { jwtDecode } from "jwt-decode";
// const token = localStorage.getItem('token');
const TokenService = {
    isTokenExpired: (token) => {
        try {
          const decoded = jwtDecode(token);
          if (decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return true;
          } else {
            return false;
          }
        } catch (error) {
          return true;
        }
      },
}
export default TokenService;