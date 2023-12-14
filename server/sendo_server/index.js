const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require('./router/AuthRouter')
require('./config/DBConnect');
require("dotenv").config();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api',userRouter);
app.get('/demo', (req, res) => {
  res.send('Hello, this is the homepage!');
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});