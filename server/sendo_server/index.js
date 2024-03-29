const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const userRouter = require('./router/AuthRouter');
const profileRouter = require('./router/ProfileRouter');
const productRouter = require('./router/ProductRouter');
const categoriesRouter = require('./router/CategoriesRouter');
const adminRouter = require('./router/AdminRouter');
const updateSellerRouter = require('./router/UpdateSellerRouter');
const cartRouter = require('./router/CartRouter');
const orderRouter = require('./router/OrderRouter');
const paymentRouter = require('./router/PaymentRouter');
const cors = require('cors');
require('./config/DBConnect');
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });
// Middleware to handle FormData
app.use(upload.none());
app.use('/api',userRouter,productRouter,categoriesRouter,profileRouter, adminRouter
,updateSellerRouter,cartRouter,paymentRouter,orderRouter );

app.listen(port, '0.0.0.0',() => {
  console.log(`Server is running at http://localhost:${port}`);
});