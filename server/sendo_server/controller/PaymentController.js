

const querystring = require('qs');
const crypto = require('crypto');

class PaymentController {
 
  static createPayment(req, res) {
    try {
      var ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

      var tmnCode = 'FQ7RGHP3';
      var secretKey = 'GFPKSRVWTYLJSBVZFZACEHMFCYLGSGAH';
      var vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
      var returnUrl = 'http://localhost:4000/vnpay_return';
      var date = new Date();

      var dateFormat = require('dateformat');
      var createDate = dateFormat(date, 'yyyymmddHHMMss');
      var orderId = dateFormat(date, 'HHmmss');
      var amount = req.body.amount;
      var bankCode = req.body.bankCode;
      var orderInfo = req.body.orderDescription;
      var orderType = req.body.orderType;
      var locale = req.body.language;
      if (locale === null || locale === '') {
        locale = 'vn';
      }
      let currCode = 'VND';
      let vnp_Params = {};
      vnp_Params['vnp_Version'] = '2.1.0';
      vnp_Params['vnp_Command'] = 'pay';
      vnp_Params['vnp_TmnCode'] = tmnCode;
      vnp_Params['vnp_Locale'] = locale;
      vnp_Params['vnp_CurrCode'] = currCode;
      vnp_Params['vnp_TxnRef'] = orderId;
      vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
      vnp_Params['vnp_OrderType'] = 'other';
      vnp_Params['vnp_Amount'] = amount * 100;
      vnp_Params['vnp_ReturnUrl'] = returnUrl;
      vnp_Params['vnp_IpAddr'] = ipAddr;
      vnp_Params['vnp_CreateDate'] = createDate;
      if(bankCode !== null && bankCode !== ''){
          vnp_Params['vnp_BankCode'] = bankCode;
      }
  
      vnp_Params = sortObject(vnp_Params);
  
      let querystring = require('qs');
      let signData = querystring.stringify(vnp_Params, { encode: false });
      let crypto = require("crypto");     
      let hmac = crypto.createHmac("sha512", secretKey);
      let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex"); 
      vnp_Params['vnp_SecureHash'] = signed;
      vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

      res.status(200).json(vnpUrl);
    } catch (error) {
      return res.status(400).json({ error: 'Bad Request' });
    }
  }
  static returnPayment(req, res) {
    let vnp_Params = req.query;
    console.log(vnp_Params);
    console.log('--------------Đang thực hiện ở chổ này------------------!!!');
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    console.log("-----------------------------nos dday")
    console.log(vnp_Params);
    
    let tmnCode = 'FQ7RGHP3';
    let secretKey = 'GFPKSRVWTYLJSBVZFZACEHMFCYLGSGAH';

    let querystring = require('qs');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let crypto = require("crypto");     
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     

    if(secureHash === signed){
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        res.status(200).json(vnp_Params['vnp_ResponseCode']);
    } else{
        res.status(200).json(97);
    }
  }
}
function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj){
        if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}
module.exports = PaymentController;
