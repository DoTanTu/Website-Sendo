const express = require('express');
const PaymentController = require('../controller/PaymentController');
const router = express.Router();

router.post('/create-payment-url', PaymentController.createPayment);
// Vui lòng tham khảo thêm tại code demo

router.get('/vnpay_return', PaymentController.returnPayment);
module.exports = router;