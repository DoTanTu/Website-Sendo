import axios from "axios";

const BASE_URL = "http://localhost:3000/api";
const PaymentService = {
    createPayment : async (paymentInfo) => {
        try {
            const response = await axios.post(`${BASE_URL}/create-payment-url`, paymentInfo);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    returnPayment : async () => {
        try {
            const response = await axios.get(`${BASE_URL}/vnpay_return`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

export default PaymentService;