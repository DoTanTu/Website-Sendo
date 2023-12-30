const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require('./router/AuthRouter');
const profileRouter = require('./router/ProfileRouter');
const productRouter = require('./router/ProductRouter');
const categoriesRouter = require('./router/CategoriesRouter');
const cors = require('cors');
require('./config/DBConnect');
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',userRouter,productRouter,categoriesRouter,profileRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});