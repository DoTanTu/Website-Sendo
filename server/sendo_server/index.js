const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require('./router/AuthRouter')
require('./config/DBConnect');
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use('/api',userRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});