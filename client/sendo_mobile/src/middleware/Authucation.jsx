import { jwtDecode } from "jwt-decode";
import { decode as base64Decode } from "base-64";
const Authurcation = {
  verifyToken: async (token) => {
    try {
        const [header, payload, signature] = token.split(".");
        const decodedPayload = JSON.parse(base64Decode(payload));
        console.log(decodedPayload);
        return decodedPayload.is_verified;
    }catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
};

export default Authurcation;
